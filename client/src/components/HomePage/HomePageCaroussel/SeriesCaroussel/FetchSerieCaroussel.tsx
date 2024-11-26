import { useEffect, useState } from "react";
import { fetchSerieCaroussel } from "../../../../services/CarousselService/CarousselService";
import type { CineListProps } from "../../../../types/CineListProps";
import SeriesCaroussel from "./SerieCaroussel";

export default function FetchSerie() {
  const [series, setSeries] = useState<CineListProps[]>([]);
  const MoviePath = "https://image.tmdb.org/t/p/w500/";
  useEffect(() => {
    const fetchSeries = async () => {
      const uniqueIds = new Set<number>();

      try {
        const serieData = await fetchSerieCaroussel();

        const uniqueResults = serieData.results.filter(
          (serie: { id: number }) => {
            if (!uniqueIds.has(serie.id)) {
              uniqueIds.add(serie.id);
              return true;
            }
            return false;
          },
        );

        setSeries(uniqueResults);
      } catch (error) {
        console.error("Erreur lors de la récupération des animes :", error);
      }
    };

    fetchSeries();
  }, []);

  return (
    <>
      <SeriesCaroussel series={series} SeriePath={MoviePath} />
    </>
  );
}
