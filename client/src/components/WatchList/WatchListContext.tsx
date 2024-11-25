import { createContext, useContext, useEffect, useState } from "react";
import type { CineListProps } from "../../types/CineListProps";

const WatchListContext = createContext<{
  watchList: CineListProps[];
  addToWatchList: (movie: CineListProps) => void;
} | null>(null);

export const WatchListProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [watchList, setWatchList] = useState<CineListProps[]>([]);

  useEffect(() => {
    const storedWatchList = localStorage.getItem("watchList");
    if (storedWatchList) {
      setWatchList(JSON.parse(storedWatchList));
    }
  }, []);

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

  return (
    <WatchListContext.Provider value={{ watchList, addToWatchList }}>
      {children}
    </WatchListContext.Provider>
  );
};

export const useWatchList = () => {
  const context = useContext(WatchListContext);
  if (!context) {
    throw new Error("useWatchList doit être utilisé dans un WatchListProvider");
  }
  return context;
};
