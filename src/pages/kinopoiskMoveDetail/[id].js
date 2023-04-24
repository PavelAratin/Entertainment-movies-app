import Image from "next/image";
const KinopoiskMovedetail = ({kinopoiskMoveDetail}) => {
  console.log('kinopoiskMoveDetail',kinopoiskMoveDetail);
  
  return (
    <div className="move-detail">
      <div className="move-detail__imgbox">
        <Image
          width={600}
          height={600}
          src={kinopoiskMoveDetail.posterUrl}
          alt="#"
        />
      </div>
      <div className="move-detail__content">
        <h1 className="title-h2">{kinopoiskMoveDetail.nameOriginal ? kinopoiskMoveDetail.nameOriginal : kinopoiskMoveDetail.nameRu }</h1>
        {/* <p className="move-detail__description">{characterDetail.data.results[0].description !== "" ? characterDetail.data.results[0].description : "Данные не получены"}</p> */}
        <p className="move-detail__description">Возрастной рйтинг: {kinopoiskMoveDetail.ratingAgeLimits}</p>
        <p className="move-detail__rating-imdb"><span>Рейтинг IMDB:</span>: {kinopoiskMoveDetail.ratingAgeLimits}</p>
        <ul className="move-detail__list">
          <li className="move-detail__item">Genres:</li>
          {kinopoiskMoveDetail.genres.map((genre,index) => (
            <li key={genre.index} className="move-detail__item">{genre.genre}</li>
          ))}
        </ul>
        <ul className="move-detail__list">
          <li className="move-detail__item">Countries:</li>
          {kinopoiskMoveDetail.countries.map((country,index) => (
            <li key={country.index} className="move-detail__item">{country.country}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}


export async function getStaticProps(context) {
  const id = context.params.id
  const resKinopoiskMoveDetail = await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`, {
    headers: {
      'X-API-KEY': '5b5541df-cf16-4a80-a315-4df0a301f83a',
      'Content-Type': 'application/json',
    },
  })
  const dataKinopoiskMoveDetail = await resKinopoiskMoveDetail.json();
  return {
    props: {
      kinopoiskMoveDetail: dataKinopoiskMoveDetail
    }
  }
}

export async function getStaticPaths() {
  const kinopoiskFilmRes = await fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films', {
    headers: {
      'X-API-KEY': '5b5541df-cf16-4a80-a315-4df0a301f83a',
      'Content-Type': 'application/json',
    },
  });
  const kinopoiskFilmData = await kinopoiskFilmRes.json();
  console.log('kinopoiskFilmData',kinopoiskFilmData);
   
  const paths = kinopoiskFilmData.items.map((kinopoiskMove) => (
    { params: { id: kinopoiskMove.kinopoiskId.toString() } }
  ))

  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  }
}


export default KinopoiskMovedetail;