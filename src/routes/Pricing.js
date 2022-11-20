import React from 'react';
import HeroImage from '../components/HeroImage/HeroImage';
import PriceCardsContainer from '../components/PriceCardsContainer/PriceCardsContainer';

const Pricing = () => {
  return (
    <div>
      <HeroImage cta='Book your trip now!' />
      <PriceCardsContainer />
    </div>
  );
};

export default Pricing;
