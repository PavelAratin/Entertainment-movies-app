
import KinopoiskSection from "@/components/KinopoiskSection";
import MarvelSection from "@/components/MarvelSection";
import { getApiUrl } from "@/utils/utils";
import React from "react";

export default function Home({ dataMarvelCharacters, kinopoiskFilmData }) {
  return (
    <React.Fragment>
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
