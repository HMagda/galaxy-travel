import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './routes/Home';
import Pricing from './routes/Pricing';
import Training from './routes/Training';
import Contact from './routes/Contact';
import NotFound from './routes/NotFound';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home-page" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/costs" element={<Pricing />} />
        <Route path="/training" element={<Training />} />
        <Route path="/how-to-prepare" element={<Training />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
