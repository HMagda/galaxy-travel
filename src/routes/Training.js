import React from 'react';
import Footer from '../components/Footer/Footer';
import HeroImage from '../components/HeroImage/HeroImage';
import Location from '../components/Location/Location';

const Training = () => {
  return (
    <div>
      <HeroImage cta='Get prepared for your trip' />
      <Location />
      <Footer />
    </div>
  );
};

export default Training;
