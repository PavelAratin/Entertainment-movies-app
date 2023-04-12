import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import CardMovie from './CradMovie';
// Import Swiper styles
import 'swiper/css';

const TrendingSection = ({ dataTrendFilms }) => {
  const [films, setFilms] = useState(dataTrendFilms)
  return (
    <section className='trending'>
      <h2 className='title-h2'>Trending</h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={5.7}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {films.films.map((film,index) => (
          <SwiperSlide key={index}>
            <CardMovie film={film}></CardMovie>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}


export default TrendingSection;