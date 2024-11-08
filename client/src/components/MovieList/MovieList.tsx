import { useEffect, useMemo, useState } from "react";
import "./style.css";
import Fuse from "fuse.js";
import SearchBar from "./searchBar";

type Movie = {
  id: number;
  title: string;
  poster_path: string;
  total_pages: number;
  overview: string;
  vote_average: string;
  vote_count: number;
  release_date: string;
};

export default function MoviesList() {
  const [movies, setMovie] = useState<Movie[]>([]);
  const [pages, setPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const fuseOptions = {
    isCaseSensitive: false,
    includeScore: false,
    shouldSort: true,
    includeMatches: false,
    findAllMatches: false,
    minMatchCharLength: 1,
    location: 0,
    threshold: 0.6,
    distance: 100,
    useExtendedSearch: false,
    ignoreLocation: false,
    ignoreFieldNorm: false,
    fieldNormWeight: 1,
    keys: ["title"],
  };

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOTYxZjNkMjhmYjA0ODQwY2NiNDlkMmQzYjhlZTU1YiIsIm5iZiI6MTczMDczNzc3NS4zOTM1ODY2LCJzdWIiOiI2NzI4ZWFiNzM5NDBjMTIwMmZmN2Q2ODEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.3hTxfLqEU-mn3vqvTs8JvvATPzSiqY67QyMwfhgbGy8",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?language=fr&page=${pages}`,
      options,
    )
      .then((res) => res.json())
      .then((data) => {
        setMovie(data.results);
        setPages(data.total_pages);
      })
      .catch((err) => console.error(err));
  }, [pages]);

  const handleNextPage = () => {
    setPages(() => (pages === 0 ? 1 : pages + 1));
  };
  const handlePrevPage = () => {
    setPages(() => (pages === 0 ? 1 : pages - 1));
  };

  const fuse = useMemo(() => new Fuse(movies, fuseOptions), [movies]);
  const getFilteredMovies = () => {
    if (!searchTerm) return movies;
    const results = fuse.search(searchTerm);
    return results.map((result) => result.item);
  };

  const filteredMovies = getFilteredMovies();

  return (
    <>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <main>
        {filteredMovies.map((movie) => (
          <section key={movie.id} className="movieList">
            <article className="movie-content">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <article className="movie-hover-text">
                <h2>{movie.title}</h2>
                <p>{movie.overview}</p>
                <p>{movie.vote_average} ⭐</p>
                <p>{movie.vote_count}❤️</p>
                <p>Date de sortie: {movie.release_date}</p>
              </article>
            </article>
          </section>
        ))}
      </main>
      <button onClick={handleNextPage} type="button">
        Suivant {pages}/319
      </button>
      <button onClick={handlePrevPage} type="button">
        Précédent
      </button>
    </>
  );
}
