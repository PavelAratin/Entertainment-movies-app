import apiUrl from "@/utils/utilsApiMarvelUrl";

const MoveDetail = ({ dataFilmsDetail }) => {
  console.log("detail",dataFilmsDetail);
  return (
    <div className="move-detail">
      <div className="move-detail__imgbox">
        <img src="#" alt="#" />
      </div>
      <div className="move-detail__content">
        <h1 className="title-h1">название фильма</h1>
        <p className="move-detail__description">информация о фильме</p>
      </div>
    </div>
  )
}

export async function getStaticProps(context) {
  const id = context.params.id
  const resFilms = await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`, {
    headers: {
      "X-API-KEY": "5b5541df-cf16-4a80-a315-4df0a301f83a",
      'Content-Type': 'application/json',
    }
  })
  const dataFilms = await resFilms.json();
  return {
    props: {
      dataFilmsDetail: dataFilms
    }
  }
}

export async function getStaticPaths() {
  const marvelCharactersRes = await fetch(apiUrl)
  const marvelCharactersData = await marvelCharactersRes.json();
  const paths = marvelCharactersData.items.map((marvelCharacter) => (
    { params: { id: marvelCharacter.id.toString() } }
  ))

  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  }
}


export default MoveDetail;