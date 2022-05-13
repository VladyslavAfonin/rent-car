import React from 'react'
import Car from './Car'

export default function DisplayCars({cars = []}) {
    return (
        <>
            {cars.map(item => <Car key={item.uid} car={item} />)}
        </>
    )
}
