import React, { Component } from 'react'
import { CarContext } from '../context'
import Loading from './Loading';
import Car from './Car';
import Title from './Title';

export default class FeaturedCars extends Component {
    static contextType = CarContext;
    render() {
        let {loading, featuredCars: cars} = this.context;
        cars = cars.map(car => {
            return <Car key={car.id} car={car} />
        })

        return (
            <section className="featured">
                <div className="featured__container container">
                    <Title title="GREAT RENTAL OFFERS FOR YOU" />
                    <div className="featured__list">
                        {loading ? <Loading /> : cars}  
                    </div>
                </div>
            </section>
        )
    }
}
