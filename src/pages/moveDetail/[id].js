import { getApiUrl } from "@/utils/utilsApiMarvelUrl";

const MoveDetail = ({ characterDetail }) => {
  console.log("detail",characterDetail.data.results[0].name);
  return (
    <div className="move-detail">
      <div className="move-detail__imgbox">
        <img src="#" alt="#" />
      </div>
      <div className="move-detail__content">
        <h1 className="title-h1">{characterDetail.data.results[0].name}</h1>
        <p className="move-detail__description">информация о фильме</p>
      </div>
    </div>
  )
}

export async function getStaticProps(context) {
  const id = context.params.id
  console.log('id',id);
  
  const resCharacterDetail = await fetch(getApiUrl(id))
  const dataCharacterDetail = await resCharacterDetail.json();
  return {
    props: {
      characterDetail: dataCharacterDetail
    }
  }
}

export async function getStaticPaths() {
  const marvelCharactersRes = await fetch(getApiUrl())
  const marvelCharactersData = await marvelCharactersRes.json();
  console.log('marvelCharactersData',marvelCharactersData);
  const paths = marvelCharactersData.data.results.map((marvelCharacter) => (
    { params: { id: marvelCharacter.id.toString() } }
  ))

  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  }
}


export default MoveDetail;