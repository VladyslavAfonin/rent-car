import React, {useContext} from 'react'
import { CarContext } from '../context'
import Title from './Title'
import StickyBox from "react-sticky-box";

const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))]
}

export default function CarFilter({cars}) {
  const context = useContext(CarContext);
  const {handleChange, type, capacity, minPrice, maxPrice, auto, manual} = context;

  let types = getUnique(cars, "type");
  types = ["all", ...types]
  types = types.map((item, index) => {
    return <option key={index} value={item}>{item}</option>
  })

  let people = getUnique(cars, "capacity");
  people = people.sort((a, b) => a - b).map((item, index) => {
    return <option key={index} value={item}>{item}</option>
  })

  return (
    <StickyBox className="filter" offsetTop={100}>
      <Title title="Search cars" />
      <form className='filter__form'>
        <div className="filter__group">
          <label htmlFor="type">Car type</label>
          <select name="type" id="type" value={type} 
            className="filter__control" onChange={handleChange}>
              {types}
          </select>
        </div>
        <div className="filter__group">
          <label htmlFor="capacity">Passengers</label>
          <select name="capacity" id="capacity" value={capacity} 
            className="filter__control" onChange={handleChange}>
              {people}
          </select>
        </div>
        <div className="filter__group">
          <label htmlFor="price">Car price</label>
          <div className="filter__inputs">
            <input
              type="number"
              name="minPrice"
              value={minPrice}
              onChange={handleChange}
              className="filter__input"
            />
            <input
              type="number"
              name="maxPrice"
              value={maxPrice}
              onChange={handleChange}
              className="filter__input"
            />
          </div>
        </div>
        <div className="filter__group">
          <div className="filter__extra">
            <input type="checkbox" name="auto" id="auto" checked={auto} onChange={handleChange} />
            <label htmlFor="auto">auto</label>
          </div>
          <div className="filter__extra">
            <input type="checkbox" name="manual" id="manual" checked={manual} onChange={handleChange} />
            <label htmlFor="manual">manual</label>
          </div>
        </div>
      </form>
    </StickyBox>
  )
}
