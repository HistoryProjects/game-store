import games505 from '../../../assets/images/brands/505-games.png';
import atari from '../../../assets/images/brands/atari.svg';
import bethesda from '../../../assets/images/brands/bethesda.svg';
import blizzard from '../../../assets/images/brands/blizzard.svg';
import konami from '../../../assets/images/brands/konami.svg';
import microsoft from '../../../assets/images/brands/microsoft.svg';
import nintendo from '../../../assets/images/brands/nintendo.svg';
import sega from '../../../assets/images/brands/sega.svg';
import sony from '../../../assets/images/brands/sony.svg';
import thq from '../../../assets/images/brands/thq.svg';
import valve from '../../../assets/images/brands/valve.svg';
import xbox from '../../../assets/images/brands/xbox.svg';

import { Navigation, Pagination} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import './brands.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Brands = () => {
    
    return(
        <div>
            <Swiper
                modules={[Navigation, Pagination]}
                navigation={true}
                pagination={{clickable: true}}
                slidesPerGroup={5}
                slidesPerView={5}
                className="brandsSwiper"
            >
                <SwiperSlide> <img src={games505} alt="" /> </SwiperSlide>
                <SwiperSlide> <img src={atari} alt="" /> </SwiperSlide>
                <SwiperSlide> <img src={bethesda} alt="" /> </SwiperSlide>
                <SwiperSlide> <img src={blizzard} alt="" /> </SwiperSlide>
                <SwiperSlide> <img src={konami} alt="" /> </SwiperSlide>
                <SwiperSlide> <img src={microsoft} alt="" /> </SwiperSlide>
                <SwiperSlide> <img src={nintendo} alt="" /> </SwiperSlide>
                <SwiperSlide> <img src={sega} alt="" /> </SwiperSlide>
                <SwiperSlide> <img src={sony} alt="" /> </SwiperSlide>
                <SwiperSlide> <img src={thq} alt="" /> </SwiperSlide>
                <SwiperSlide> <img src={valve} alt="" /> </SwiperSlide>
                <SwiperSlide> <img src={xbox} alt="" /> </SwiperSlide>
            </Swiper>
        </div>
        
    )
}
export default Brands;


