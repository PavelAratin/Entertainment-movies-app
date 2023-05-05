import KinoCard from "../kinoCard/KinoCard";

const KinopoiskSection = ({ kinopoiskFilmData }) => {
  return (
    <section className='kino-section'>
      <h2 className="title-h2">Kinopoiks movie</h2>
      <div className="kino-section__content">
        {kinopoiskFilmData.items.map((kino) => (
          <KinoCard key={kino.kinopoiskId} kino={kino}></KinoCard>
        ))}
      </div>
    </section>
  )
}


export default KinopoiskSection;