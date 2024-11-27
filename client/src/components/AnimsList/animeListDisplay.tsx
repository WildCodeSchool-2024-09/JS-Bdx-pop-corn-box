import { useState } from "react";
import "../MovieList/style.css";
import type { CineListProps } from "../../types/CineListProps";
import FilterAnimes from "../Filters/FilterAnimes";
import SearchBar from "../SearchBar/searchBar";
import AnimCard from "./AnimCard";
import FetchAnimList from "./FetchAnimList";

export default function AnimeListDisplay() {
  const [cineList, setCineList] = useState<CineListProps[]>([]);
  const [filteredList, setFilteredList] = useState<CineListProps[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [genre, setGenre] = useState(16);
  return (
    <>
      <FilterAnimes filterProps={setGenre} />
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        cineList={cineList}
        setFilteredList={setFilteredList}
      />
      <FetchAnimList
        setCineList={setCineList}
        setFilteredList={setFilteredList}
        myGenre={genre}
      />
      <main className="movieContainer">
        {filteredList.map((animes) => (
          <AnimCard key={animes.id} animes={animes} />
        ))}
      </main>
    </>
  );
}
