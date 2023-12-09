import React from 'react';
import profile from '../assets/AboutImage.png'
import Image from 'next/image';
const About = () => {
    return (
        <div className='mt-[172px] border-t border-b border-white flex justify-center flex-wrap lg:flex-nowrap  gap-10 items-center'>
            <div className='lg:w-1/2 '>
                <Image className='w-[590px] h-[750px] img-fluid' alt='' src={profile}></Image>
            </div>
            <div className='lg:w-1/2'>
                <button className='btn text-[#6919FF]'>About</button>
                <h2 className='text-[48px] text-[#F6F7FA]'>Web Developer</h2>
                <div className='text-[#919BBA] text-[16px]'>
                    Hello, I&apos;m <span className='text-[#F6F7FA]'>Md Titumir Anan</span>, a passionate <span className='text-[#F6F7FA]'>Junior Frontend Developer</span> from Bangladesh with a knack for turning design concepts into <span className='text-[#F6F7FA]'>responsive</span> and visually appealing websites. Adept at HTML, CSS, JavaScript, React, Next JS and complemented by my cyber security expertise. I thrive on creating seamless user experiences. Committed to staying <span className='text-[#F6F7FA]'>ahead in web development trends</span> and delivering top-notch projects with satisfaction.
                </div>
            </div>

        </div>
    );
};

export default About;