
import CardMarvel from "@/components/CradMarvel";
import KinopoiskSection from "@/components/KinopoiskSection";
import MarvelSection from "@/components/MarvelSection";
import { getApiUrl } from "@/utils/utils";
import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function Home({ dataMarvelCharacters, kinopoiskFilmData }) {
  const searchValue = useSelector((state) => state.siteSearch.searchValue);
  const [searchValueFromStore, setSearchValueFromStore] = useState(searchValue)
  const [searchValueState, setSearchValueState] = useState([]);

  useEffect(() => {
    setSearchValueState(dataMarvelCharacters.data.results.filter((marvelCharacter) => marvelCharacter.name.replace(/ /g, '').toLowerCase().includes(searchValue)))
    setSearchValueFromStore(searchValue)
  }, [searchValue]);
  console.log(searchValueFromStore);

  // console.log(searchValueState === true);
  // console.log(searchValueState);

  return (
    <React.Fragment>
      {searchValueFromStore === '' || searchValueFromStore === null ? '' :
        <React.Fragment>
          <h2 className="title-h2">Search Result</h2>
          <div className="kino-section__content">
          {searchValueState.map((marvelCharacter, index) => <CardMarvel key={marvelCharacter.id} marvelCharacter={marvelCharacter}></CardMarvel>)}А
          </div>
        </React.Fragment>}
      <React.Fragment>
        <MarvelSection dataMarvelCharacters={dataMarvelCharacters}></MarvelSection>
        <KinopoiskSection kinopoiskFilmData={kinopoiskFilmData}></KinopoiskSection>
      </React.Fragment>
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
