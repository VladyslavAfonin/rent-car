import React from 'react'
import DisplayCars from './DisplayCars'
import emptySearch from "../images/empty-search.svg"

export default function CarList({cars}) {
  if(cars.length === 0) {
    return (
      <div className="empty-search">
        <img src={emptySearch} alt="empty" />
        <h3>Unfortunately no cars matched your search parameters</h3>
      </div>
    )
  }
  return (
    <div className="cars">
      <div className="cars__list">
          <DisplayCars cars={cars}/>
      </div>
    </div>
  )
}
