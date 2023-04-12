import Form from "@/components/Form";
import Header from "@/components/Header";
import PremierSection from "@/components/PremierSection";
import TrendingSection from "@/components/TrendingSection";

export default function Home({ dataTrendFilms,dataFilms }) {
  return (
    <div className="site-container">
      <Header></Header>
      <main>
        <Form></Form>
        <TrendingSection dataTrendFilms={dataTrendFilms}></TrendingSection>
        <PremierSection dataFilms={dataFilms}></PremierSection>
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  const resTop = await fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/top', {
    headers: {
      "X-API-KEY": "5b5541df-cf16-4a80-a315-4df0a301f83a",
      'Content-Type': 'application/json',
    }
  })
  const resFilms = await fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films', {
    headers: {
      "X-API-KEY": "5b5541df-cf16-4a80-a315-4df0a301f83a",
      'Content-Type': 'application/json',
    }
  })
  const dataTrendFilms = await resTop.json();
  const dataFilms = await resFilms.json();
  return {
    props: {
      dataTrendFilms,
      dataFilms
    }
  }
}
