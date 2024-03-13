"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import img from "./../../assets/testimonial.png";
import Image from "next/image";
const Testimonial = () => {
  const datas = [
    {
      name: "Jaber Hossain",
      title: "UI/UX",
      img: img,
      description:
        "Working with Titumir was an absolute game-changer for our project. Their expertise in front-end development seamlessly translated our design vision into a stunning, user-friendly website. Their attention to detail and commitment to staying on the pulse of industry trends ensured a result that exceeded our expectations. If you're looking for a passionate and skilled front-end web developer, Titumir is the one to trust.",
    },
    {
      name: "Jaber Hossain",
      title: "UI/UX",
      img: img,
      description:
        "Working with Titumir was an absolute game-changer for our project. Their expertise in front-end development seamlessly translated our design vision into a stunning, user-friendly website. Their attention to detail and commitment to staying on the pulse of industry trends ensured a result that exceeded our expectations. If you're looking for a passionate and skilled front-end web developer, Titumir is the one to trust.",
    },
    {
      name: "Jaber Hossain",
      title: "UI/UX",
      img: img,
      description:
        "Working with Titumir was an absolute game-changer for our project. Their expertise in front-end development seamlessly translated our design vision into a stunning, user-friendly website. Their attention to detail and commitment to staying on the pulse of industry trends ensured a result that exceeded our expectations. If you're looking for a passionate and skilled front-end web developer, Titumir is the one to trust.",
    },
    {
      name: "Jaber Hossain",
      title: "UI/UX",
      img: img,
      description:
        ' "Working with Titumir was an absolute game-changer for our project. Their expertise in front-end development seamlessly translated our design vision into a stunning, user-friendly website. Their attention to detail and commitment to staying on the pulse of industry trends ensured a result that exceeded our expectations. If you are looking for a passionate and skilled front-end web developer, Titumir is the one to trust."',
    },
  ];
  return (
    <div className="mt-[140px]">
      <div className="flex flex-col justify-center items-center">
        <button className="btn">Testimonial</button>
        <h1 className="text-center text-white font-bold text-[48px] leading-[58px] mt-4 mb-[64px]">
          What Clients Say
        </h1>
      </div>
      <div className="flex justify-center items-center">
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          breakpoints={{
            375: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 2,
            },
          }}
        >
          {datas.map((work, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard data={work} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
interface Proptes {
  data: any;
}
const TestimonialCard: React.FC<Proptes> = ({ data }) => {
  return (
    <div className="boxContainer  lg:w-[490px] h-[210px] before:h-[210px] rounded-[20px] before:w-[490px] ">
      <div className="flex-col flex items-center rounded-[20px] space-y-2 lg:w-[488px] h-[208px]   justify-center bg-[#0C1021]  overflow-hidden text-[#E4E8F7]  absolute z-10">
        <div className="text-white  bg-[#0C1021]  z-40  p-6 rounded-[20px]  gap-12  flex-col ms-3 ">
          <p className="text-white overflow-hidden text-center  gap-10">
            {" "}
            {(data as any).description.slice(0, 200)}
          </p>
          <div className="flex gap-5 items-center mt-4">
            <Image className="h-14 w-14" src={(data as any).img} alt="" />
            <div>
              <p className="inter font-bold text-[24px]">
                {(data as any).name}
              </p>
              <p className="inter font-[500] text-[16px]">
                {(data as any).title}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-white  bg-[#0C1021]  z-40  p-6 rounded-[20px] hidden gap-10  flex-col ms-3 ">
        <p className="text-white overflow-hidden text-center  gap-10">
          {" "}
          {(data as any).description.slice(0, 200)}
        </p>
        <div className="flex gap-5 items-center">
          <Image className="h-14 w-14" src={(data as any).img} alt="" />
          <div>
            <p className="inter font-bold text-[24px]">{(data as any).name}</p>
            <p className="inter font-[500] text-[16px]">
              {(data as any).title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
