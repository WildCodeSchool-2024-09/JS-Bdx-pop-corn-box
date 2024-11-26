import { useEffect } from "react";
import { fetchAllSeries } from "../../services/CatalogueService/CatalogueService";
import type { CineListProps } from "../../types/CineListProps";
import type { FetchMovie } from "../../types/FetchMovieProps";
import type { MovieResponse } from "../../types/MovieResponse";

export default function FetchSerieList({
  setCineList,
  setFilteredList,
}: FetchMovie) {
  useEffect(() => {
    const fetchSeries = async () => {
      const allResults: CineListProps[] = [];
      let currentPage = 1;
      const uniqueIds = new Set<number>();
      try {
        while (currentPage <= 5) {
          const data: MovieResponse = await fetchAllSeries(currentPage);
          for (const serie of data.results) {
            if (!uniqueIds.has(serie.id)) {
              uniqueIds.add(serie.id);
              allResults.push(serie);
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
    fetchSeries();
  }, [setCineList, setFilteredList]);

  return null;
}
