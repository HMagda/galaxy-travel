import React from 'react';
import Customer from '../components/Customer/Customer';
import Footer from '../components/Footer/Footer';
import HeroImage from '../components/HeroImage/HeroImage';
import PriceCardsContainer from '../components/PriceCardsContainer/PriceCardsContainer';


const Pricing = () => {

  

  return (
    <>
      <HeroImage cta='Book your trip now!' />
      <PriceCardsContainer />
      <Customer/>

      <Footer />
    </>
  );
};

export default Pricing;
