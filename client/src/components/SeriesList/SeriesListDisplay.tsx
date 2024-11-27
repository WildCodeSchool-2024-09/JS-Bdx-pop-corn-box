import { useState } from "react";
import "../MovieList/style.css";
import type { CineListProps } from "../../types/CineListProps";
import SearchBar from "../SearchBar/searchBar";
import { useWatchList } from "../WatchList/usewatchList";
import FetchSerieList from "./FetchSerieList";
import SerieCard from "./SerieCard";
import FilterSeries from "../Filters/FilterSeries";

export default function SeriesListDisplay() {
  const [cineList, setCineList] = useState<CineListProps[]>([]);
  const [filteredList, setFilteredList] = useState<CineListProps[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [genre, setGenre] = useState<number | undefined>();
  const { watchList, addToWatchList, removeFromWatchList } = useWatchList();
  console.info(watchList);
  return (
    <>
      <FilterSeries filterProps={setGenre} />
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        cineList={cineList}
        setFilteredList={setFilteredList}
      />
      <FetchSerieList
        setCineList={setCineList}
        setFilteredList={setFilteredList}
        myGenre={genre}
      />
      <main className="movieContainer">
        {filteredList.map((serie) => (
          <SerieCard
            key={serie.id}
            series={serie}
            addToWatchList={addToWatchList}
            removeFromWatchList={removeFromWatchList}
          />
        ))}
      </main>
    </>
  );
}
