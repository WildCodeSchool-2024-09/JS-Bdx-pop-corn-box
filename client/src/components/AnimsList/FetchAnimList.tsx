import { useEffect } from "react";
import { fetchAllAnimes } from "../../services/animeService";
import type { CineListProps } from "../../types/CineListProps";
import type { FetchMovie } from "../../types/FetchMovieProps";
import type { MovieResponse } from "../../types/MovieResponse";

export default function FetchAnimList({
  setCineList,
  setFilteredList,
}: FetchMovie) {
  useEffect(() => {
    const fetchAnims = async () => {
      const allResults: CineListProps[] = [];
      let currentPage = 1;
      const uniqueIds = new Set<number>();
      try {
        while (currentPage <= 5) {
          const data: MovieResponse = await fetchAllAnimes(currentPage);
          for (const animes of data.results) {
            if (!uniqueIds.has(animes.id)) {
              uniqueIds.add(animes.id);
              allResults.push(animes);
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
    fetchAnims();
  }, [setCineList, setFilteredList]);

  return null;
}
