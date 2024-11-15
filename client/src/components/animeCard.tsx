import "./animeCard.css";

type propsType = {
  animeProps: {
    id: number;
    name: string;
    overview: string;
    poster_path: string;
  };
};

export default function AnimeCard({ animeProps }: propsType) {
  return (
    <article>
      <figure>
        <figcaption>
          <h1 key={animeProps.id}>{animeProps.name}</h1>
          <p>{animeProps.overview}</p>
        </figcaption>

        <img
          src={`https://image.tmdb.org/t/p/w500${animeProps.poster_path}`}
          alt={animeProps.name}
        />
      </figure>
    </article>
  );
}
