import { useEffect, useState } from "react";
import type { CineListProps } from "../../types/CineListProps";

export function useWatchList() {
  const [watchList, setWatchList] = useState<CineListProps[]>(() => {
    const savedWatchList = localStorage.getItem("watchList");
    return savedWatchList ? JSON.parse(savedWatchList) : [];
  });

  useEffect(() => {
    localStorage.setItem("watchList", JSON.stringify(watchList));
  }, [watchList]);

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
