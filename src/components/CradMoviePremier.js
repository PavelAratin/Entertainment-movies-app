import Image from "next/image";
import Link from "next/link";
const CardMoviePremier = ({ filmPremier}) => {
  return (
    <div className="card-movie">
      <div className="card-movie__imgbox card-movie__imgbox--trending">
        <Image className="card-movie__img" src={filmPremier.posterUrlPreview} alt={filmPremier.nameRu ? filmPremier.nameRu : "Alter Text"} fill sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"></Image>
      </div>
      <div className="card-movie__content">
        <ul className="card-movie__list">
          <li className="card-movie__item">
            <p className="card-movie__age">{filmPremier.year}</p>
          </li>
          <li className="card-movie__item">
            <p className="card-movie__movie-type">rating {filmPremier.rating}</p>
          </li>
          {/* <li className="card-movie__item">
            <p className="card-movie__age-restrictions">TV Series</p>
          </li> */}
        </ul>
        <Link href={`/moveDetail/${filmPremier.kinopoiskId}`}>
          <h3 className="title-h3 card-movie__title">{filmPremier.nameEn ? filmPremier.nameEn : filmPremier.nameRu}</h3>
        </Link>
      </div>
      <span className="card-movie__favorites">
        <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.61 0c.14 0 .273.028.4.083a1.03 1.03 0 0 1 .657.953v11.928a1.03 1.03 0 0 1-.656.953c-.116.05-.25.074-.402.074-.291 0-.543-.099-.756-.296L5.833 9.77l-4.02 3.924c-.218.203-.47.305-.756.305a.995.995 0 0 1-.4-.083A1.03 1.03 0 0 1 0 12.964V1.036A1.03 1.03 0 0 1 .656.083.995.995 0 0 1 1.057 0h9.552Z" stroke="#fff" strokeWidth="1.5" /></svg>
      </span>
    </div >
  )
}


export default CardMoviePremier;