import { useWatchList } from "./WatchListContext";

export default function WatchList() {
  const { watchList, removeFromWatchList } = useWatchList(); // Utilisez directement la fonction depuis le contexte

  return (
    <main className="movieContainer">
      <h1 className="watchlistTitle">Ma WatchList</h1>
      {watchList.length === 0 ? (
        <p>Aucun film ajouté à la WatchList.</p>
      ) : (
        watchList.map((movie) => (
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
                  onClick={() => removeFromWatchList(movie)} // Appel direct depuis le contexte
                  className="FavIcone"
                  type="button"
                  aria-label={`Supprimer ${movie.title || movie.name} de la WatchList`}
                >
                  <img
                    src="./src/assets/images/deleteFav.png"
                    alt={`Icône pour supprimer ${movie.title || movie.name}`}
                  />
                </button>
              </figcaption>
            </figure>
          </section>
        ))
      )}
    </main>
  );
}
