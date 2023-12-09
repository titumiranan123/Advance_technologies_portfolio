import Link from 'next/link';
import React from 'react';

const Hero = () => {
    return (
        <div className='' >
            <nav className='text-white flex justify-between items-center'>
                <div>
                    Titumir Anan
                </div>
                <div className='flex gap-5 justify-center items-center'>
                    <Link href={'/'}>WORKS</Link>
                    <Link href={'/about'}>ABOUT</Link>
                    <button className='btn'>Say Hello</button>
                </div>
            </nav>
            {/* heading content  */}
            <div className='mt-[141px] flex justify-center items-end gap-5 '>
                <div>
                    <div className='font-bold text-[88px]'>
                        <span className='text-[#919BBA] '>Turning </span> <span className='text-[#F6F7FA]'>Code</span> <span className='text-[#919BBA] '>Into</span><br /> <span className='text-[#919BBA]'>Creative </span> <span className='text-[#F6F7FA]'>Solutions</span>
                    </div>
                </div>
                <div >
                    <p className='lg:w-[378px] lg:h-[78px] text-[#F6F7FA] mb-5'>Empowering the digital landscape with precision and passion, transforming ideas into immersive online experiences.</p>
                </div>
            </div>
            <div className='flex justify-center items-center gap-10'>
                <button className='text-white border rounded-s-full  rounded-e-full px-[39px] py-[20px] hover:bg-[#6919FF] text-[16px] font-[500]'>Explore My Works</button>
                <button className='text-white border rounded-s-full  rounded-e-full px-[39px] py-[20px] hover:bg-[#6919FF] text-[16px] font-[500]'> Download CV </button>
            </div>
        </div>
    );
};

export default Hero;