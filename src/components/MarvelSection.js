
import { Swiper, SwiperSlide } from 'swiper/react';
import CardMarvel from './CradMarvel';
import 'swiper/css';
import { useEffect, useState } from 'react';

const MarvelSection = ({ dataMarvelCharacters }) => {
  const [windowWidth, setWindowWidth] = useState(undefined)

  useEffect(() => {
    const changeWindowWidth = () => {
      setWindowWidth(window.innerWidth);
      console.log(window.innerWidth)
    };
    window.addEventListener('resize', changeWindowWidth)
    changeWindowWidth();
    //перестаем считать ширину окна, при размонтировании компонента
    return () => window.removeEventListener('resize', changeWindowWidth)
  }, [])
  console.log(windowWidth);
  
  return (
    <section className='trending'>
      <h2 className='title-h2'>Marvel movie</h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={windowWidth >= 1250 ? 5.5 : '' || windowWidth >= 768 ? 2.5 : '' || windowWidth <= 768 ? 1.5 : ''  } 
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