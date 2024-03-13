import About from "@/Components/About";
import Exprience from "@/Components/Exprience/Exprience";
import Footer from "@/Components/Footer";
import Hero from "@/Components/Hero";
import Workconatact from "@/Components/Work Contact/Workconatact";
import Work from "@/Components/work/Work";
import React from "react";

const Home = () => {
  return (
    <div className=" lg:max-w-[1200px] lg:px-0 px-10 pt-10  mx-auto padding">
      <Hero />
      
      <About />
      <Work />
      <Exprience />
      <Workconatact />
      <span className="hrline">
        <span className="h-1"></span>
      </span>
      <Footer />
    </div>
  );
};

export default Home;
