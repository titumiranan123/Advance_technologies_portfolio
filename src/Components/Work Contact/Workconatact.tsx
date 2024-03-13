import React from "react";

const Workconatact = () => {
  return (
    <div className="boxContainer mt-[140px] mb-[50px] lg:w-[1200px] h-[180px]">
      <div className="flex-col flex items-center rounded-[20px] space-y-2 lg:w-[1198px] h-[176px]   justify-center bg-[#0C1021]  overflow-hidden text-[#E4E8F7]  absolute z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 p-10 gap-4">
          <div className="text-[#F6F7FA] text-[24px] font-bold ">
            Start a Project
          </div>
          <div className="text-[#F6F7FA] text-[16px]">
            Interested in working together? We should have a time to chat and
            discuss about the project.
          </div>
          <div className="flex lg:justify-end ">
            <button className="btn lg:w-1/3 bg-[#6919FF] text-[#F6F7FA]">
              Say Hello
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workconatact;
