import { useEffect, useState } from "react";
import type { CineListProps } from "../../types/CineListProps";

export function useWatchList() {
  const [watchList, setWatchList] = useState<CineListProps[]>(() => {
    try {
      const savedWatchList = localStorage.getItem("watchList");
      return savedWatchList ? JSON.parse(savedWatchList) : [];
    } catch (error) {
      console.error(
        "Erreur lors du chargement de la liste depuis localStorage",
        error,
      );
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("watchList", JSON.stringify(watchList));
    } catch (error) {
      console.error("Erreur lors de la sauvegarde dans le localStorage", error);
    }
  }, [watchList]);

  useEffect(() => {
    const handleStorageChange = () => {
      try {
        const savedWatchList = localStorage.getItem("watchList");
        if (savedWatchList) {
          setWatchList(JSON.parse(savedWatchList));
        }
      } catch (error) {
        console.error(
          "Erreur lors de la synchronisation avec le localStorage",
          error,
        );
      }
    };

    window.addEventListener("storage", handleStorageChange);

    window.addEventListener("focus", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("focus", handleStorageChange);
    };
  }, []);

  const addToWatchList = (movie: CineListProps) => {
    setWatchList((prev) => {
      if (!prev.find((fav) => fav.id === movie.id)) {
        return [...prev, movie];
      }
      return prev;
    });
  };

  const removeFromWatchList = (movie: CineListProps) => {
    setWatchList((prev) => prev.filter((fav) => fav.id !== movie.id));
  };

  return { watchList, addToWatchList, removeFromWatchList };
}
