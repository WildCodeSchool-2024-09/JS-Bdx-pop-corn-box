import { useEffect, useState } from "react";
import MoviesCaroussel from "./Caroussels";

function PopularMovies() {
  const [movies, setMovies] = useState([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOTYxZjNkMjhmYjA0ODQwY2NiNDlkMmQzYjhlZTU1YiIsIm5iZiI6MTczMDg4NzY5OS43Mjc1MTE2LCJzdWIiOiI2NzI4ZWFiNzM5NDBjMTIwMmZmN2Q2ODEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0._wd1EUDlhgem0CdseijkxOfTQ_oEO9XLn5-vfTszIFg",
    },
  };

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-fr&page=1",
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
