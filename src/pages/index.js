
import MarvelSection from "@/components/MarvelSection";
import { getApiUrl } from "@/utils/utilsApiMarvelUrl";

export default function Home({ dataMarvelCharacters }) {
  console.log('dataMarvelCharacters',dataMarvelCharacters);
  
  return (
        <MarvelSection dataMarvelCharacters={dataMarvelCharacters}></MarvelSection>
  )
}

export async function getServerSideProps() {
  const marvelCharactersRes = await fetch(getApiUrl())
  const dataMarvelCharacters = await marvelCharactersRes.json();
  return {
    props: {
      dataMarvelCharacters,
    }
  }
}
