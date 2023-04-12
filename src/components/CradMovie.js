import Image from "next/image";
const CardMovie = ({ film }) => {
  return (
    <div className="card-movie">
      <div className="card-movie__imgbox card-movie__imgbox--trending">
        <Image className="card-movie__img" src={film.posterUrlPreview} alt={film.nameRu} fill></Image>
      </div>
      <div className="card-movie__content">
        <ul className="card-movie__list">
          <li className="card-movie__item">
            <p className="card-movie__age">{film.year}</p>
          </li>
          <li className="card-movie__item">
            <p className="card-movie__movie-type">rating {film.rating}</p>
          </li>
          {/* <li className="card-movie__item">
            <p className="card-movie__age-restrictions">TV Series</p>
          </li> */}
        </ul>
        <h3 className="title-h3 card-movie__title">{film.nameEn ? film.nameEn : film.nameRu }</h3>
      </div>
      <span className="card-movie__favorites">
        <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.61 0c.14 0 .273.028.4.083a1.03 1.03 0 0 1 .657.953v11.928a1.03 1.03 0 0 1-.656.953c-.116.05-.25.074-.402.074-.291 0-.543-.099-.756-.296L5.833 9.77l-4.02 3.924c-.218.203-.47.305-.756.305a.995.995 0 0 1-.4-.083A1.03 1.03 0 0 1 0 12.964V1.036A1.03 1.03 0 0 1 .656.083.995.995 0 0 1 1.057 0h9.552Z" stroke="#fff" strokeWidth="1.5" /></svg>
      </span>
    </div>
  )
}


export default CardMovie;