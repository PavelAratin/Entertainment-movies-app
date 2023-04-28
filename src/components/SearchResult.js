import CardMarvel from "./CradMarvel";
const SearchResult = ({ searchValueStateFilter }) => {
  return (
    <section>
      <h1 className="title-h2">Результат поиска</h1>
      <div className="kino-section__content">
        {searchValueStateFilter.map((marvelCharacter) => <CardMarvel key={marvelCharacter.id} marvelCharacter={marvelCharacter}></CardMarvel>)}А
      </div>
    </section>
  )
}


export default SearchResult;