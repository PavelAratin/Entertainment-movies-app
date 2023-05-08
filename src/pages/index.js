import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
///
import KinopoiskSection from "@/components/kinopoiskSection/KinopoiskSection";
import MarvelSection from "@/components/marvelSection/MarvelSection";
import SearchResult from "@/components/searchResult/SearchResult";
///
import { getApiUrl, getValidNameCharacter } from "@/utils/utils";
//

export default function Home({ dataMarvelCharacters, kinopoiskFilmData }) {
  console.log(process.env);
  const searchValue = useSelector((state) => state.siteSearch.searchValue);
  //записываем в стейт значение из редкс
  const [searchValueState,setSearchValueState] = useState(searchValue)
  const [searchValueStateFilterMarvel, setSearchValueStateFilterMarvel] = useState([]);
  const [searchValueStateFilterKinopoisk, setSearchValueStateFilterKinopoisk] = useState([]);
  const [displaySearch, setDisplaySearch] = useState(false);

  useEffect(() => {
    if(searchValueStateFilterMarvel.length > 0 || searchValueStateFilterKinopoisk.length > 0){
      setDisplaySearch(true)
    }else{
      setDisplaySearch(false)
    }

    setSearchValueState(searchValue)
   
    setSearchValueStateFilterMarvel(dataMarvelCharacters.data.results.filter((marvelCharacter) => getValidNameCharacter(marvelCharacter.name).includes(searchValue === '' ? false : searchValue)))
    setSearchValueStateFilterKinopoisk(kinopoiskFilmData.items.filter((kinopoiskFilm) => getValidNameCharacter(kinopoiskFilm.nameOriginal).includes(searchValue === '' ? false : searchValue)))
  }, [searchValue,searchValueState]);

  return (
    <React.Fragment>
      {displaySearch && <SearchResult searchValueStateFilterMarvel={searchValueStateFilterMarvel} searchValueStateFilterKinopoisk={searchValueStateFilterKinopoisk}></SearchResult> }
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
