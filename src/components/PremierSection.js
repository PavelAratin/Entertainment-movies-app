import { useState } from "react";
import CardMovie from "./CradMovie";

const PremierSection = ({ dataFilms }) => {
  const [films, setFilms] = useState(dataFilms)
  console.log(films.items);
  return (
    <section className="premier">
      <h2 className='title-h2'>Premiers</h2>
      <div className="premier__content">
        {films.items.map((film) => (
          <CardMovie film={film}></CardMovie>
        ))}
      </div>
    </section>
  )
}


export default PremierSection;