import Fuse from "fuse.js";
import { useEffect, useMemo } from "react";

type SearchBarProps = {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  movies: Movie[];
  setFilteredMovies: (movies: Movie[]) => void;
};
type Movie = {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  vote_average: string;
  vote_count: number;
  release_date: string;
};

export default function SearchBar({
  searchTerm,
  setSearchTerm,
  movies,
  setFilteredMovies,
}: SearchBarProps) {
  const handleSearchTerm = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
  };
  console.info(searchTerm);

  const fuseOptions = {
    isCaseSensitive: false,
    includeScore: false,
    shouldSort: true,
    includeMatches: false,
    findAllMatches: false,
    minMatchCharLength: 1,
    location: 0,
    threshold: 0.6,
    distance: 100,
    useExtendedSearch: false,
    ignoreLocation: false,
    ignoreFieldNorm: false,
    fieldNormWeight: 1,
    keys: ["title"],
  };
  const fuse = useMemo(() => new Fuse(movies, fuseOptions), [movies]);

  useEffect(() => {
    if (!searchTerm === true) {
      setFilteredMovies(movies);
      return;
    }
    const filteredMovies = fuse
      .search(searchTerm)
      .map((results) => results.item);
    setFilteredMovies(filteredMovies);
  }, [searchTerm, fuse, setFilteredMovies, movies]);

  return (
    <>
      <header>
        <h1>Les Films</h1>
        <label htmlFor="searchBar">Recherche</label>
        <input
          type="search"
          name="searchBar"
          className="rechercher"
          placeholder="Que voulez vous regardez"
          onChange={handleSearchTerm}
        />
      </header>
    </>
  );
}
