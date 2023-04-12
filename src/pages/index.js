import Form from "@/components/Form";
import Header from "@/components/Header";
import TrendingSection from "@/components/TrendingSection";

export default function Home({dataTrendFilms}) {
  return (
    <div className="site-container">
      <Header></Header>
      <main>
        <Form></Form>
        <TrendingSection dataTrendFilms={dataTrendFilms}></TrendingSection>
      </main>
    </div>
  )
}

export async function getServerSideProps(context){
  const res = await fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/top',{
    headers:{
      "X-API-KEY":"5b5541df-cf16-4a80-a315-4df0a301f83a",
      'Content-Type': 'application/json',
    }
  })
  const dataTrendFilms = await res.json();
  return{
    props:{dataTrendFilms}
  }
}
