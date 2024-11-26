import { useEffect, useState } from "react";

import { fetchAnimeCaroussel } from "../../../../services/CarousselService/CarousselService";
import type { CineListProps } from "../../../../types/CineListProps";
import AnimsCaroussel from "./AnimsCaroussel";

export default function FetchCarousselAnime() {
  const [anims, setAnims] = useState<CineListProps[]>([]);
  const AnimPath = "https://image.tmdb.org/t/p/w500/";

  useEffect(() => {
    const fetchAnimes = async () => {
      const uniqueIds = new Set<number>();

      try {
        const animeData = await fetchAnimeCaroussel();

        const uniqueResults = animeData.results.filter(
          (anime: { id: number }) => {
            if (!uniqueIds.has(anime.id)) {
              uniqueIds.add(anime.id);
              return true;
            }
            return false;
          },
        );

        setAnims(uniqueResults);
      } catch (error) {
        console.error("Erreur lors de la récupération des animes :", error);
      }
    };

    fetchAnimes();
  }, []);

  return (
    <div>
      <AnimsCaroussel anims={anims} AnimPath={AnimPath} />
    </div>
  );
}
