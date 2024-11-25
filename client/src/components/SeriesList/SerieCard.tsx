import type { CineListProps } from "../../types/CineListProps";

export default function SerieCard({ series }: { series: CineListProps }) {
  return (
    <>
      <section key={series.id} className="movieList">
        <figure className="movie-content">
          <img
            src={`https://image.tmdb.org/t/p/w500${series.poster_path}`}
            alt={series.title || series.name}
          />
          <figcaption className="movie-hover-text">
            <h2>{series.title || series.name}</h2>
            <p>{series.overview}</p>
            <p>{series.vote_average} ⭐</p>
            <p>{series.vote_count} ❤️</p>
            <p>Date de sortie: {series.release_date}</p>
          </figcaption>
        </figure>
      </section>
    </>
  );
}
