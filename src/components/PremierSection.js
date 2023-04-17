import { useState } from "react";
import CardMovie from "./CradMoviePremier";

const PremierSection = ({ dataFilms }) => {
  const [films, setFilms] = useState(dataFilms)
  return (
    <section className="premier">
      <h2 className='title-h2'>Premiers</h2>
      <div className="premier__content">
        {films.items.map((filmPremier,index) => (
          <CardMovie filmPremier={filmPremier} key={index}></CardMovie>
        ))}
      </div>
    </section>
  )
}


export default PremierSection;