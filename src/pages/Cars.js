import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import CarsContainer from '../components/CarsContainer';

const Cars = () => {
  return (
    <>
      <Hero hero="hero hero-cars">
        <Banner title="Our cars" subtitle="We offer to rent a car without or with a qualified driver. The car is provided for any period of time at the request of the client: from several hours or 1 day to several weeks. If necessary, our staff will provide a transfer from the airport or will meet you and your business partners at the railway station. A VIP rental car will certainly have a positive impact on your image!">
          <Link to="/" className=' hero__btn btn-primary'>
            Return home
          </Link>
        </Banner>
      </Hero>
      <CarsContainer />
    </>
  )
}

export default Cars;