import Image from "next/image";
import { getApiUrl } from "@/utils/utils";
import { thumbnailPathChange } from "@/utils/utils";


const MoveDetail = ({ characterDetail }) => {
  return (
    <div className="move-detail">
      <div className="move-detail__imgbox">
        <Image
          // width={300}
          // height={300}
          src={thumbnailPathChange(characterDetail.data.results[0].thumbnail.path) + '.' + characterDetail.data.results[0].thumbnail.extension}
          alt="#"
          fill
        />
      </div>
      <div className="move-detail__content">
        <h1 className="title-h2">{characterDetail.data.results[0].name}</h1>
        <p className="move-detail__description">{characterDetail.data.results[0].description !== "" ? characterDetail.data.results[0].description : "Данные не получены"}</p>
        <ul className="move-detail__list">
          <li className="move-detail__item">Comics:</li>
          {characterDetail.data.results[0].comics.items.map((comics) => (
            <li key={comics.name} className="move-detail__item">{comics.name}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export async function getStaticProps(context) {
  const id = context.params.id
  console.log('id', id);

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
  console.log('marvelCharactersData', marvelCharactersData);
  const paths = marvelCharactersData.data.results.map((marvelCharacter) => (
    { params: { id: marvelCharacter.id.toString() } }
  ))

  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  }
}


export default MoveDetail;