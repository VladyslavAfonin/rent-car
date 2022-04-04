import React from 'react'
import Title from "components/Title"
import { Link } from 'react-router-dom'
import errorImg from "images/404.svg"
import { Carousel } from 'react-carousel-minimal';
import { useSingleCar } from './SingleCar.hook';
import { priceHeaders } from './SingleCar.utils';

export default function SingleCar() {

  const {displayNotFound, name, description, characteristics, carImages, priceValues} = useSingleCar();

  if (displayNotFound) {
    return (
      <div className="automobile automobile-error">
        <div className="automobile__container container">
          <h2> Unfortunately car not found </h2>
          <img src={errorImg} alt="not found" />
          <Link to="/cars" className="btn-primary">
            back to cars list
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="automobile">
      <div className="automobile__container container">
        <Title title={name} />
        <section className="automobile__top">
          <div className="automobile__photos">
          <Carousel
            data={carImages}
            width="100%"
            height="auto"
            maxHeight="none"
            slideImageFit="cover"
            thumbnails={true}
            style={{
              maxWidth: "100%",
              maxHeight: "none"
            }}
          />
          </div>
          <div className="automobile__prices">
            <table>
              <thead>
                <tr className="automobile__row automobile__row-head">
                  {priceHeaders.map((item, index) => {
                    return <td key={index} className='automobile__header'>{item}</td>
                  })}
                </tr>
              </thead>
              <tbody>
                <tr className="automobile__row automobile__row-body">
                  {priceValues.map((item, index) => {
                    return <td key={index} className='automobile__value'>{item}</td>
                  })}
                </tr>
              </tbody>
            </table>

            <p className="automobile__important">
              The service fee is paid in cash or by credit card. You need to pay for each day of rental without a driver, and for each hour or kilometer in case of rental with a driver. An exclusive option of our company is the possibility of extending the contract. You can familiarize yourself with the rental conditions and tariffs in detail in the corresponding section of our website or by phone numbers, which you will find at the top of this page.
            </p>
          </div>
        </section>

        <section className="automobile__bottom">
          <h6>Characteristics</h6>
          <div className="automobile__characteristics">
            {
              characteristics.map((item, index) => {
                return <p key={index} className='automobile__characteristics-item'>{item}</p>
              })
            }
          </div>
          <p className="automobile__description">{description}</p>
        </section>
      </div>
    </div>
  )
}
