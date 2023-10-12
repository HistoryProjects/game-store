import bnr1 from '../../../assets/images/baner/bnr1.webp';
import bnr2 from '../../../assets/images/baner/bnr2.webp';
import bnr3 from '../../../assets/images/baner/bnr3.webp';
import bnr4 from '../../../assets/images/baner/bnr4.webp';
import bnr5 from '../../../assets/images/baner/bnr5.webp';
import bnr6 from '../../../assets/images/baner/bnr6.webp';

import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import React, {useRef, useEffect} from 'react';

// Import Swiper styles
import './baner.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const Baner = () => {
    const swiperRef = useRef(null);
 
    useEffect(() => {
        if (swiperRef.current) swiperRef.current.swiper.autoplay.start();
    }, []);
    

    return(
        <div className="">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation={true}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                slidesPerView={1}
                ref={swiperRef}
                className="banerSwiper"
                autoplay={{ delay: 10000 }}
            >
                <SwiperSlide>
                    <img src={bnr1} alt='slide-1' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={bnr2} alt='slide-2' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={bnr3} alt='slide-3' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={bnr4} alt='slide-4' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={bnr5} alt='slide-5' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={bnr6} alt='slide-6' />
                </SwiperSlide>
            </Swiper>
        </div>
        
    )
}
export default Baner;

