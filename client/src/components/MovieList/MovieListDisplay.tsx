import { useState } from "react";
import "../MovieList/style.css";
import type { CineListProps } from "../../types/CineListProps";
import FilterMovies from "../Filters/FilterMovies";
import SearchBar from "../SearchBar/searchBar";
import FetchMoviesList from "./FetchMovieList";
import MovieCard from "./MovieCard";

export default function MovieListDisplay() {
  const [cineList, setCineList] = useState<CineListProps[]>([]);
  const [filteredList, setFilteredList] = useState<CineListProps[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [genre, setGenre] = useState<number | undefined>();
  return (
    <>
      <FilterMovies filterProps={setGenre} />
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        cineList={cineList}
        setFilteredList={setFilteredList}
      />
      <FetchMoviesList
        setCineList={setCineList}
        setFilteredList={setFilteredList}
        myGenre={genre}
      />
      <main className="movieContainer">
        {filteredList.map((movies) => (
          <MovieCard key={movies.id} movie={movies} />
        ))}
      </main>
    </>
  );
}
