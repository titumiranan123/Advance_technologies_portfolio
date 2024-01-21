import About from '@/Components/About';
import Exprience from '@/Components/Exprience/Exprience';
import Footer from '@/Components/Footer';
import Hero from '@/Components/Hero';
import Workconatact from '@/Components/Work Contact/Workconatact';
import Work from '@/Components/work/Work';
import React from 'react';

const Home = () => {
  return (
    <div className='bg-[#060918] max-w-[1440px]   mx-auto padding'>
      <Hero />
      <About />
      <Work />
      <Exprience />
      <Workconatact />
      <Footer />
    </div>
  );
};

export default Home;