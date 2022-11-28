import React from 'react';
import HeroImage from '../components/HeroImage/HeroImage';
import Footer from '../components/Footer/Footer';
import ContactForm from '../components/ContactForm/ContactForm';

const Contact = () => {
  return (
    <div>
      <HeroImage cta='Contact us for more details' />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;
