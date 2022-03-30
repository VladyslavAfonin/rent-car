import React, { useContext } from 'react'
import Title from "../components/Title"
import { Link, useParams } from 'react-router-dom'
import { CarContext } from '../context'
import errorImg from "../images/404.svg"
import { Carousel } from 'react-carousel-minimal';

export default function SingleCar() {
  const contextType = useContext(CarContext);
  const {link} = useParams(); 

  const { getCar } = contextType;
  const car = getCar(link);

  if (!car) {
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

  const {name, description, price, oneMonthPrice, tenDaysPrice, threeDaysPrice, characteristics, images} = car;
  
  const carImages = images.map(item => {
    return {
      image: item
    }
  })


  const priceHeaders = ["Period", "from 1 month", "10-29 days", "4-9 days", "1-3 days", "Deposit"];
  const priceValues = ["Price per day", `${oneMonthPrice}$`, `${tenDaysPrice}$`, `${threeDaysPrice}$`, `${price}$`, "500$"];

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
