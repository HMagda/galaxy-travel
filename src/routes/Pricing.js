import React from 'react';
import CustomerOpinion from '../components/CustomerOpinion/CustomerOpinion';
import Footer from '../components/Footer/Footer';
import HeroImage from '../components/HeroImage/HeroImage';
import PriceCardsContainer from '../components/PriceCardsContainer/PriceCardsContainer';


const Pricing = () => {

  

  return (
    <>
      <HeroImage cta='Book your trip now!' />
      <PriceCardsContainer />
      <CustomerOpinion/>

      <Footer />
    </>
  );
};

export default Pricing;
