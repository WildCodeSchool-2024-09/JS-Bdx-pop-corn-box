import { useState } from "react";
import "../MovieList/style.css";
import type { CineListProps } from "../../types/CineListProps";
import SearchBar from "../SearchBar/searchBar";
import FetchSerieList from "./FetchSerieList";
import SerieCard from "./SerieCard";

export default function SeriesListDisplay() {
  const [cineList, setCineList] = useState<CineListProps[]>([]);
  const [filteredList, setFilteredList] = useState<CineListProps[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        cineList={cineList}
        setFilteredList={setFilteredList}
      />
      <FetchSerieList
        setCineList={setCineList}
        setFilteredList={setFilteredList}
      />
      <main className="movieContainer">
        {filteredList.map((serie) => (
          <SerieCard key={serie.id} series={serie} />
        ))}
      </main>
    </>
  );
}
