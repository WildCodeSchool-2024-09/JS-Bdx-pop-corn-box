import { useState } from "react";
import type { CineListProps } from "../../types/CineListProps";
import "./style.css";
export default function MovieCard({
  movie,
  addToWatchList,
  removeFromWatchList,
}: {
  movie: CineListProps;
  addToWatchList: (movie: CineListProps) => void;
  removeFromWatchList: (movie: CineListProps) => void;
}) {
  const [isFavoris, setIsFavoris] = useState(false);
  const handleToggleWatchList = () => {
    if (isFavoris) {
      removeFromWatchList(movie);
    } else {
      addToWatchList(movie);
    }
    setIsFavoris(!isFavoris);
  };
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
            <button
              onClick={handleToggleWatchList}
              className="FavIcone"
              type="button"
            >
              <img
                src={
                  isFavoris
                    ? "./src/assets/images/fillFavoris.png"
                    : "./src/assets/images/emptyFavoris.png"
                }
                alt="Ajouter à la WatchList"
              />
            </button>
          </figcaption>
        </figure>
      </section>
    </>
  );
}
