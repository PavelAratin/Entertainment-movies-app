
import { Swiper, SwiperSlide } from 'swiper/react';
import CardMarvel from './CradMarvel';
// Import Swiper styles
import 'swiper/css';

const MarvelSection = ({ dataMarvelCharacters }) => {
  return (
    <section className='trending'>
      <h2 className='title-h2'>Marvel movie</h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={5.5}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {dataMarvelCharacters.data.results.map((marvelCharacter) => (
          <SwiperSlide key={marvelCharacter.id}>
            <CardMarvel marvelCharacter={marvelCharacter}></CardMarvel>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}


export default MarvelSection;