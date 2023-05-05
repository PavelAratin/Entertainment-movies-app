import React,{ useState, useEffect } from "react";
import { useSelector } from "react-redux";
///
import KinopoiskSection from "@/components/kinopoiskSection/KinopoiskSection";
import MarvelSection from "@/components/marvelSection/MarvelSection";
import SearchResult from "@/components/searchResult/SearchResult";
///
import { getApiUrl, getValidNameCharacterMarvel } from "@/utils/utils";

export default function Home({ dataMarvelCharacters, kinopoiskFilmData }) {
  const searchValue = useSelector((state) => state.siteSearch.searchValue);
  const [searchValueStateFilter, setSearchValueStateFilter] = useState([]);

  useEffect(() => {
    setSearchValueStateFilter(dataMarvelCharacters.data.results.filter((marvelCharacter) => getValidNameCharacterMarvel(marvelCharacter.name).includes(searchValue === '' ? false : searchValue)))
  }, [searchValue]);

  return (
    <React.Fragment>
      {searchValueStateFilter.length === 0 ? '' : <SearchResult searchValueStateFilter={searchValueStateFilter}></SearchResult>}
      <MarvelSection dataMarvelCharacters={dataMarvelCharacters}></MarvelSection>
      <KinopoiskSection kinopoiskFilmData={kinopoiskFilmData}></KinopoiskSection>
    </React.Fragment>
  )
}

export async function getServerSideProps() {
  //запрос на марвел
  const marvelCharactersRes = await fetch(getApiUrl())
  const dataMarvelCharacters = await marvelCharactersRes.json();
  //запрос кинопоиск
  const kinopoiskFilmRes = await fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films', {
    headers: {
      'X-API-KEY': '5b5541df-cf16-4a80-a315-4df0a301f83a',
      'Content-Type': 'application/json',
    },
  });
  const kinopoiskFilmData = await kinopoiskFilmRes.json();;
  return {
    props: {
      dataMarvelCharacters,
      kinopoiskFilmData
    }
  }
}
