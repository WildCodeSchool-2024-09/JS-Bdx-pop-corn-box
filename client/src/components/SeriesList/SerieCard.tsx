import { useState } from "react";
import type { CineListProps } from "../../types/CineListProps";

export default function SerieCard({
  series,
  addToWatchList,
  removeFromWatchList,
}: {
  series: CineListProps;
  addToWatchList: (series: CineListProps) => void;
  removeFromWatchList: (series: CineListProps) => void;
}) {
  const [isFavoris, setIsFavoris] = useState(false);
  const handleToggleWatchList = () => {
    if (isFavoris) {
      removeFromWatchList(series);
    } else {
      addToWatchList(series);
    }
    setIsFavoris(!isFavoris);
  };
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
