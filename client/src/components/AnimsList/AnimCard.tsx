import type { CineListProps } from "../../types/CineListProps";

export default function AnimCard({ animes }: { animes: CineListProps }) {
  return (
    <>
      <section key={animes.id} className="movieList">
        <figure className="movie-content">
          <img
            src={`https://image.tmdb.org/t/p/w500${animes.poster_path}`}
            alt={animes.title || animes.name}
          />
          <figcaption className="movie-hover-text">
            <h2>{animes.title || animes.name}</h2>
            <p>{animes.overview}</p>
            <p>{animes.vote_average} ⭐</p>
            <p>{animes.vote_count} ❤️</p>
            <p>Date de sortie: {animes.release_date}</p>
          </figcaption>
        </figure>
      </section>
    </>
  );
}
