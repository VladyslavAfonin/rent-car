import React from 'react'
import CarsFilter from "./CarsFilter.js"
import CarsList from "./CarsList.js"
import { CarConsumer } from '../services/context.js'
import Loading from './Loading.js'

export default function CarsContainer() {
  return (
    <CarConsumer>
        {
            value => {
                const {loading, sortedCars, cars} = value;
                
                if(loading) {
                    return <Loading />
                }
                return (
                    <section className='cars-wrapper'>
                        <div className="cars-wrapper__container container">
                            <CarsFilter cars={cars} />
                            <CarsList cars={sortedCars} />
                        </div>
                    </section>
                )
            }
        }
    </CarConsumer>
  )
}
