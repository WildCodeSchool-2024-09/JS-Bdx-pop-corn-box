import Fuse from "fuse.js";
import { useEffect, useMemo } from "react";
import type { CineListProps } from "../MovieList/MovieList";
type SearchBarProps = {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  cineList: CineListProps[];
  setFilteredList: (movies: CineListProps[]) => void;
};

export default function SearchBar({
  searchTerm,
  setSearchTerm,
  cineList,
  setFilteredList,
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
    keys: ["title", "name"],
  };
  const fuse = useMemo(() => new Fuse(cineList, fuseOptions), [cineList]);

  useEffect(() => {
    if (!searchTerm === true) {
      setFilteredList(cineList);
      return;
    }
    const filteredList = fuse.search(searchTerm).map((results) => results.item);
    setFilteredList(filteredList);
  }, [fuse, searchTerm, setFilteredList, cineList]);

  return (
    <>
      <section className="searchBarContainer">
        <label htmlFor="searchBar">Recherche</label>
        <input
          type="search"
          name="searchBar"
          className="rechercher"
          placeholder="Que voulez vous regardez"
          onChange={handleSearchTerm}
        />
      </section>
    </>
  );
}
