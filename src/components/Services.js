import React, { useState } from 'react'
import Title from './Title'
import {FaMapMarkerAlt} from "react-icons/fa"
import {MdSupport, MdSchedule} from "react-icons/md"

export default function Services() {
    const [services] = useState([
        {
            icon: <MdSupport />,
            title: "Assistance",
            info: "Support on the road 24/7"
        },
        {
            icon: <FaMapMarkerAlt />,
            title: "Reservation anytime",
            info: "We try to provide lower prices than average"
        },
        {
            icon: <MdSchedule />,
            title: "Lots of locations",
            info: "Few documents for lease"
        }
    ])

    return (
        <section className='features'>
            <div className="features__container container">
                <Title title="Seven reasons to rent a car in our company" />
                <div className="features__list">
                    {services.map((item, index) => {
                        return (
                            <div key={index} className="features__item">
                                <div className="features__front">
                                    <div className="features__icon features__front-icon">
                                        {item.icon}
                                    </div>
                                    <h6 className="features__title features__front-title">{item.title}</h6>
                                </div>
                                <div className="features__back">
                                    <div className="features__icon features__back-icon">
                                        {item.icon}
                                    </div>
                                    <h6 className="features__title features__back-title">{item.title}</h6>
                                    <p className="features__text">{item.info}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}