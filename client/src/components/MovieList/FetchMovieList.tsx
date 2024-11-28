import { useEffect } from "react";
import { fetchAllMovies } from "../../services/CatalogueService/CatalogueService";
import type { CineListProps } from "../../types/CineListProps";
import type { FetchMovie } from "../../types/FetchMovieProps";
import type { MovieResponse } from "../../types/MovieResponse";

export default function FetchMovieList({
  setCineList,
  setFilteredList,
  myGenre,
}: FetchMovie) {
  useEffect(() => {
    const fetchMovie = async () => {
      const allResults: CineListProps[] = [];
      let currentPage = 1;
      const uniqueIds = new Set<number>();
      try {
        while (currentPage <= 5) {
          const data: MovieResponse = await fetchAllMovies(
            currentPage,
            myGenre,
          );
          for (const movies of data.results) {
            if (!uniqueIds.has(movies.id)) {
              uniqueIds.add(movies.id);
              allResults.push(movies);
            }
          }
          currentPage++;
        }
        setCineList(allResults.slice(0, 102));
        setFilteredList(allResults.slice(0, 102));
      } catch (error) {
        console.error("Erreur pendant la récupération des animés :", error);
      }
    };
    fetchMovie();
  }, [setCineList, setFilteredList, myGenre]);

  return null;
}
