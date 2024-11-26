import { useEffect, useState } from "react";

import { fetchMovieCaroussel } from "../../../../services/CarousselService/CarousselService";
import type { CineListProps } from "../../../../types/CineListProps";
import MoviesCaroussel from "./MovieCaroussel";

export default function FetchMovies() {
  const [movies, setMovies] = useState<CineListProps[]>([]);
  const MoviePath = "https://image.tmdb.org/t/p/w500/";
  useEffect(() => {
    const fetchAnimes = async () => {
      const uniqueIds = new Set<number>();

      try {
        const MovieData = await fetchMovieCaroussel();

        const uniqueResults = MovieData.results.filter((movie) => {
          if (!uniqueIds.has(movie.id)) {
            uniqueIds.add(movie.id);
            return true;
          }
          return false;
        });

        setMovies(uniqueResults);
      } catch (error) {
        console.error("Erreur lors de la récupération des films :", error);
      }
    };

    fetchAnimes();
  }, []);

  return (
    <>
      <MoviesCaroussel movies={movies} MoviePath={MoviePath} />
    </>
  );
}
