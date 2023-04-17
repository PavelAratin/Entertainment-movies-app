import Form from "@/components/Form";
import Header from "@/components/Header";
import PremierSection from "@/components/PremierSection";
import MarvelSection from "@/components/MarvelSection";
import apiUrl from "@/utils/utilsApiMarvelUrl";

export default function Home({ dataMarvelCharacters }) {
  console.log('dataMarvelCharacters',dataMarvelCharacters);
  
  return (
    <div className="site-container">
      <Header></Header>
      <main>
        <Form></Form>
        <MarvelSection dataMarvelCharacters={dataMarvelCharacters}></MarvelSection>
        {/* <TrendingSection dataMarvelCharacters={dataMarvelCharacters}></TrendingSection> */}
        {/* <PremierSection dataFilms={dataFilms}></PremierSection> */}
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  const marvelCharactersRes = await fetch(apiUrl)
  const dataMarvelCharacters = await marvelCharactersRes.json();
  return {
    props: {
      dataMarvelCharacters,
      // dataFilms
    }
  }
}
