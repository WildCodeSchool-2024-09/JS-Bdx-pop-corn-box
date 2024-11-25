import { useEffect, useState } from "react";
import MoviesCaroussel from "./Caroussels";

function PopularMovies() {
  const [movies, setMovies] = useState([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
    },
  };

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?language=fr-fr&page=1",
      options,
    )
      .then((res) => res.json())
      .then((res) => setMovies(res.results))
      .catch((err) => console.error(err));
  }, []);

  const MoviePath = "https://image.tmdb.org/t/p/w500/";

  return (
    <>
      <MoviesCaroussel movies={movies} MoviePath={MoviePath} />
    </>
  );
}

export default PopularMovies;
