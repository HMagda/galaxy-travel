import React from 'react';
import Footer from '../components/Footer/Footer';
import HeroImage from '../components/HeroImage/HeroImage';
import Location from '../components/Location/Location';
import TrainingDescription from '../components/TrainingDescription/TrainingDescription';

const Training = () => {
  return (
    <div>
      <HeroImage cta='Get prepared for your trip' />
      <Location />
      <TrainingDescription />
      <Footer />
    </div>
  );
};

export default Training;
