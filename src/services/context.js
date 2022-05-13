import React, { Component } from 'react'
import Contentstack from "contentstack/react-native"

const Stack = Contentstack.Stack({ 
    "api_key": "blt8cf190e51862a6ab", 
    "delivery_token": "csaf96efba31098e1d40310977", 
    "environment": "staging"
});

const Query = Stack.ContentType('car_item').Query();

const CarContext = React.createContext();

class CarProvider extends Component {
    state = {
        cars: [],
        sortedCars: [],
        featuredCars: [],
        loading: true,
        type: "all",
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        auto: false,
        manual: false
    };

    getData = async () => {
        try {
            await Query
                .only(['title', 'name', 'link', 'description', 'type', 'auto', 'manual', 'featured', 'capacity', 'price', 'onemonthprice', 'tendaysprice', 'threedaysprice', 'images', 'characteristics', 'extras'])
                .toJSON()
                .find()
                    .then((result) => {
                        let cars = result[0];
                        console.log(cars);
                        let featuredCars = cars.filter(car => car.featured === true);
                        let maxPrice = Math.max(...cars.map(item => item.price));

                        this.setState({
                            cars: cars,
                            featuredCars: featuredCars,
                            sortedCars: cars,
                            loading: false,
                            price: maxPrice,
                            maxPrice: maxPrice
                        })
                    }, function error(err) {
                        console.log("Something went wrong!");
                    });
        } catch (err) {
            console.log(err);
        }   
    }

    componentDidMount(){
        this.getData();
    }

    getCar = link => {
        let tempCars = [...this.state.cars];
        const car = tempCars.find(car => car.link === link);
        return car;
    };

    handleChange = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        }, this.filterCars)
    }

    filterCars = () => {
        let {cars, type, capacity, minPrice, maxPrice, auto, manual} = this.state;
        let tempCars = [...cars];
        capacity = parseInt(capacity);

        if(type !== "all"){
            tempCars = tempCars.filter(car => car.type === type)
        }

        if(capacity !== 1){
            tempCars = tempCars.filter(car => car.capacity === capacity)
        }

        tempCars = tempCars.filter(car => car.price >= minPrice && car.price <= maxPrice);

        if(auto) {
            tempCars = tempCars.filter(car => car.auto === true)
        }

        if(manual) {
            tempCars = tempCars.filter(car => car.manual === true)
        }

        this.setState({
            sortedCars: tempCars
        })
    }

    render() {
        return (
            <CarContext.Provider
                value={{...this.state, getCar: this.getCar, handleChange: this.handleChange}} >
            {this.props.children}
          </CarContext.Provider>
        )
    }
}

const CarConsumer = CarContext.Consumer;

export {CarProvider, CarConsumer, CarContext};
