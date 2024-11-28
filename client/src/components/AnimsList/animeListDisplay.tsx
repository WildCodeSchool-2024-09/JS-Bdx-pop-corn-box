import { useState } from "react";
import "../MovieList/style.css";
import type { CineListProps } from "../../types/CineListProps";
import SearchBar from "../SearchBar/searchBar";
import { useWatchList } from "../WatchList/usewatchList";
import AnimCard from "./AnimCard";
import FetchAnimList from "./FetchAnimList";

export default function AnimeListDisplay() {
  const [cineList, setCineList] = useState<CineListProps[]>([]);
  const [filteredList, setFilteredList] = useState<CineListProps[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { watchList, addToWatchList, removeFromWatchList } = useWatchList();
  console.info(watchList);
  return (
    <>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        cineList={cineList}
        setFilteredList={setFilteredList}
      />
      <FetchAnimList
        setCineList={setCineList}
        setFilteredList={setFilteredList}
      />
      <main className="movieContainer">
        {filteredList.map((animes) => (
          <AnimCard
            key={animes.id}
            animes={animes}
            addToWatchList={addToWatchList}
            removeFromWatchList={removeFromWatchList}
          />
        ))}
      </main>
    </>
  );
}
