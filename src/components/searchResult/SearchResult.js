import CardMarvel from "../cardMarvel/CradMarvel";
import KinoCard from "../kinoCard/KinoCard";
const SearchResult = ({ searchValueStateFilterMarvel, searchValueStateFilterKinopoisk }) => {
  return (
    <section>
      <h1 className="title-h2">Результат поиска</h1>
      <div className="kino-section__content">
        {[...
          searchValueStateFilterMarvel.map
            ((marvelCharacter) =>
              <CardMarvel key={marvelCharacter.id} marvelCharacter={marvelCharacter}
              ></CardMarvel>),
        ...
        searchValueStateFilterKinopoisk.map
          ((kino) =>
            <KinoCard key={kino.kinopoiskId} kino={kino}
            ></KinoCard>)
        ]}
      </div>
    </section>
  )
}


export default SearchResult;