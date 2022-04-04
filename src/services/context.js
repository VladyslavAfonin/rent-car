import React, { Component } from 'react'
import Client from "../Contentful"

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

    getData = async() => {
        try {
            let response = await Client.getEntries({
                content_type: "cars",
                order: "fields.price"
            })
            let cars = this.formatData(response.items);
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
        } catch(error) {
            console.log(error);
        }
    }

    componentDidMount(){
        this.getData();
    }

    formatData(items){
        let tempItems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);
            let car = {
                ...item.fields, 
                images: images,
                id: id
            };
            return car;
        })
        return tempItems;
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
