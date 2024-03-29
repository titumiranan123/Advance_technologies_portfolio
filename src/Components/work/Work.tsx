'use client'
import React from 'react';
import Workcard from '../WorkCard/Workcard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import work1 from '../../assets/work-1.png';
import work2 from '../../assets/youthmindsTech.png';
import work3 from '../../assets/works 3.png';

const workJson = [
    {
        image: work2,
        title: 'YouthMinds Tech',
        project_link: 'www.youthminds-tech.vercel.app',
    },
    {
        image: work1,
        title: 'Hotel MannageMent ',
        project_link: '',
    },
    {
        image: work3,
        title: 'Tea Store',
        project_link: '',
    },
];


const Work: React.FC = () => {
    return (
        <div className="w-full mt-[140px]">
            <div>my work</div>
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
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {workJson.map((work, index) => (
                    <SwiperSlide key={index}>
                        <Workcard pic={work.image} title={work.title} link={work.project_link} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Work;
