import { useState } from "react";
import "../MovieList/style.css";
import type { CineListProps } from "../../types/CineListProps";
import SearchBar from "../SearchBar/searchBar";
import FetchMoviesList from "./FetchMovieList";
import MovieCard from "./MovieCard";

export default function MovieListDisplay() {
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
      <FetchMoviesList
        setCineList={setCineList}
        setFilteredList={setFilteredList}
      />
      <main className="movieContainer">
        {filteredList.map((movies) => (
          <MovieCard key={movies.id} movie={movies} />
        ))}
      </main>
    </>
  );
}
