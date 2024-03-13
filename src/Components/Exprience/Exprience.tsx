import React from "react";

const Exprience = () => {
  return (
    <div className="mt-[140px]">
      <div className="text-center flex justify-center items-center">
        <button className="btn ">My Journey</button>
      </div>

      <div className="grid grid-cols-1 mt-[100px] lg:grid-cols-2 gap-10">
        <div className="exprience">
          <h2 className="header-text">Exprience</h2>
          <div className="flex flex-col gap-5 mt-[23px]">
            <div>
              <p className="text-[16px] text-[#F6F7FA]">Dec 2023 - Present</p>
              <h2 className="text-[24px] font-bold text-[#F6FCFF]">
                Youthminds Tech{" "}
              </h2>
              <p className="text-[16px] text-[#F6F7FA]">
                Excutive Web Devloper{" "}
              </p>
            </div>
            <div>
              <p className="text-[16px] text-[#F6F7FA]">Sept 2023 - Dec 2023</p>
              <h2 className="text-[24px] font-bold text-[#F6FCFF]">
                I Education{" "}
              </h2>
              <p className="text-[16px] text-[#F6F7FA]">Website Manager </p>
            </div>
          </div>
        </div>
        <div className="skill ">
          <div className="text-center lg:flex justify-center items-center">
            <h2 className="header-text ">Skill </h2>
          </div>
          <div className="mt-[23px]">
            <div className="flex  gap-4 items-center">
              <h2 className="text-[24px] font-bold text-[#F6FCFF]">
                Programing Language :{" "}
              </h2>
              <p className="text-[16px] text-[#F6F7FA]">
                C , C++ , Python , JavaScript{" "}
              </p>
            </div>
            <div className="">
              <h2 className="text-[24px] font-bold text-[#F6FCFF]">
                Front-End Technologies :{" "}
                <span className="text-[16px] text-[#F6F7FA] font-normal">
                  React Js , React Router, React Hooks ,Amazon AWS ,Next Js,
                  Redux , HTML , CSS3 , Tailwind CSS , Bootstrap-5{" "}
                </span>
              </h2>
            </div>
            <div className="">
              <h2 className="text-[24px] font-bold text-[#F6FCFF]">
                Back-End Technologies :{" "}
                <span className="text-[16px] text-[#F6F7FA] font-normal">
                  Node Js , MongoDB, Firebase , Mongoose , Express Js , Graph QL
                  , Socket.IO{" "}
                </span>{" "}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exprience;
