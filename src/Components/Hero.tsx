"use client";
import Link from "next/link";
import React, { useState } from "react";

const Hero = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <nav className="text-white flex justify-between items-center">
        <div className="">
          <span className="font-bold inter uppercase text-white inter text-[24px] leading-[29px]">
            Titumir &nbsp;
          </span>
          <span className="font-[400px] inter text-[24px] leading-[29px] uppercase">
            ANAN
          </span>
        </div>
        <div className="md:flex gap-5 justify-center items-center hidden">
          <Link
            className="inter font-bold text-[16px] leading-[19.36px]"
            href={"/"}
          >
            WORKS
          </Link>
          <Link
            className="inter font-bold text-[16px] leading-[19.36px]"
            href={"/about"}
          >
            ABOUT
          </Link>
          <button className="btn inter font-[500] text-[16px] leading-[19.36px]">
            Say Hello
          </button>
        </div>
        <div className="md:hidden ">
          <div
            className="flex flex-col gap-2 group "
            onClick={() => setOpen(!open)}
          >
            <span className=" w-10 h-[3px] bg-white border border-white text-black flex"></span>
            <span className=" w-10 h-[3px] bg-white border border-white text-black flex"></span>
            <span className=" w-10 h-[3px] bg-white border border-white text-black flex"></span>
          </div>
        </div>
      </nav>
      {/* heading content  */}
      <div className="mt-[141px]  flex flex-col lg:flex-row  items-center gap-10 lg:gap-5">
        <div className="font-bold  lg:w-[834px] lg:text-[78px] md:text-[78px] text-[50px] md:leading-[106px] h-[214px]">
          <span className="text-[#919BBA]   ">Turning </span>{" "}
          <span className="text-[#F6F7FA]    ">Code</span>{" "}
          <span className="text-[#919BBA]    ">Into</span>
          <br className="hidden md:block" />
          <span className="text-[#919BBA]    ">Creative </span>{" "}
          <span className="text-[#F6F7FA]    ">Solutions</span>
        </div>
        <div>
          <p className="lg:w-[387px] flex lg:mt-28 lg:h-[78px] inter font-[500] text-[16px] text-[#F6F7FA] mb-5">
            Empowering the digital landscape with precision and passion,
            transforming ideas into immersive online experiences.
          </p>
        </div>
      </div>
      <div className="flex justify-center md:flex-row flex-col mt-[40px] items-center gap-10  md:mt-[75px]">
        <button className="text-white border rounded-s-full  rounded-e-full px-[39px] py-[20px] hover:bg-[#6919FF] text-[16px] font-[500]">
          Explore My Works
        </button>
        <button className="text-white border rounded-s-full  rounded-e-full px-[39px] py-[20px] hover:bg-[#6919FF] text-[16px] font-[500]">
          Download CV
        </button>
      </div>
    </div>
  );
};

export default Hero;
