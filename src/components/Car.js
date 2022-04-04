import React from 'react'
import { Link } from 'react-router-dom'
import defaultImg from "../images/hero-bg.jpg"
import PropTypes from 'prop-types'
import { CARS_ROUTE } from 'common/routes';

export default function Car({car}) {
    const {name, link, images, price, extras, description} = car;

    const elements = extras.map((item, index) => {
        return <div key={index} className="car__details-item">
            {item}
        </div>
    })

    return (
        <div className="car">
            <div className="car__image">
                <Link to={`${CARS_ROUTE}${link}`}>
                    <img src={images[0] || defaultImg} alt={name} />
                </Link>
            </div>
            <div className="car__content">
                <div className="car__info">
                    <h6 className="car__name">
                        <Link to={`${CARS_ROUTE}${link}`}>{name}</Link>
                    </h6>
                    <p className="car__price">Start from {price}$ per a day</p>
                    <p className="car__description">{description.length > 120 ? description.slice(0, 120) + "..." : description}</p>
                    <Link to={`${CARS_ROUTE}${link}`} className='car__btn btn-primary'>Rent it</Link>
                </div>
                <div className="car__details">
                    {elements}
                </div>
            </div>
        </div>
    )
}

Car.propTypes = {
    car: PropTypes.shape({
        name: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        price: PropTypes.number.isRequired,
        extras: PropTypes.array.isRequired,
    })
}