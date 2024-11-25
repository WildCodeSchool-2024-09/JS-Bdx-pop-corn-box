import type { CineListProps } from "../../types/CineListProps";

export default function MovieCard({ movie }: { movie: CineListProps }) {
  return (
    <>
      <section key={movie.id} className="movieList">
        <figure className="movie-content">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title || movie.name}
          />
          <figcaption className="movie-hover-text">
            <h2>{movie.title || movie.name}</h2>
            <p>{movie.overview}</p>
            <p>{movie.vote_average} ⭐</p>
            <p>{movie.vote_count} ❤️</p>
            <p>Date de sortie: {movie.release_date}</p>
          </figcaption>
        </figure>
      </section>
    </>
  );
}
