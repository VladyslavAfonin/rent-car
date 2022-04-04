import React, { Component } from 'react'
import { CarContext } from '../services/context'
import Loading from './Loading';
import Title from './Title';
import DisplayCars from './DisplayCars';

export default class FeaturedCars extends Component {
    static contextType = CarContext;

    render() {
        let {loading, featuredCars} = this.context;

        return (
            <section className="featured">
                <div className="featured__container container">
                    <Title title="GREAT RENTAL OFFERS FOR YOU" />
                    <div className="featured__list">
                        {loading ? <Loading /> : <DisplayCars cars={featuredCars}/>}  
                    </div>
                </div>
            </section>
        )
    }
}
