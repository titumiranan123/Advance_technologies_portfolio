import Image from "next/image";
import Link from "next/link";
import React from "react";

interface WorkcardProps {
  pic: any;
  title: string;
  link: string;
}

const Workcard: React.FC<WorkcardProps> = ({ pic, title, link }) => {
  return (
    <div className="boxx md:w-[347px] lg:w-[377px] w-[338px] h-[195px] lg:[388px]">
      <div className=" flex-col boxs space-y-2   justify-center bg-black rounded-lg overflow-hidden text-[#E4E8F7] lg:w-[374px] md:w-[344px] w-[335px] h-[193px] absolute z-10">
        <div className="relative h-[200px]">
          <Image className="w-full h-full" src={pic} alt="" />
          <div className="absolute opacity-0 hover:opacity-100 transition-all ease-in duration-150 top-0 left-0 flex justify-center items-center w-full h-full flex-col bg-black  bg-opacity-75 gap-4">
            <p className="text-[16px] font-[400]">August 2023</p>
            <p className="text-[28px] font-[700]">{title}</p>
            <Link className="btn" href={link}>
              Project Link
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workcard;
