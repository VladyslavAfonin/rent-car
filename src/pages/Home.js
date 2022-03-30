import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import FeaturedCars from '../components/FeaturedCars';

const Home = () => {
  return (
    <>
      <Hero>
        <Banner title="Car rental in Kyiv" subtitle="We currently have more than 100 cars of different brands, classes and prices: from the most unpretentious ZAZ Lanos models to the luxurious Mercedes-Benz S350. In our rental company, it is possible to rent cars of six classes:">
          <Link to="/cars" className='hero__btn btn-primary'>
            Our cars
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedCars />
    </>
  )
}

export default Home;
