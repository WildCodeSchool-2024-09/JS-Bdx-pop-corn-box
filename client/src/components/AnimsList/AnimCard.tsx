import { useState } from "react";
import type { CineListProps } from "../../types/CineListProps";

export default function AnimCard({
  animes,
  addToWatchList,
  removeFromWatchList,
}: {
  animes: CineListProps;
  addToWatchList: (animes: CineListProps) => void;
  removeFromWatchList: (animes: CineListProps) => void;
}) {
  const [isFavoris, setIsFavoris] = useState(false);
  const handleToggleWatchList = () => {
    if (isFavoris) {
      removeFromWatchList(animes);
    } else {
      addToWatchList(animes);
    }
    setIsFavoris(!isFavoris);
  };
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
