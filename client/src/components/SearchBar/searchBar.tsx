import Fuse from "fuse.js";
import { useEffect, useMemo } from "react";
import { fuseOptions } from "../../services/Fuseoptions/fuseOption";
import type { CineListProps } from "../../types/CineListProps";

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

  const fuse = useMemo(() => new Fuse(cineList, fuseOptions), [cineList]);

  useEffect(() => {
    if (!searchTerm) {
      setFilteredList(cineList);
      return;
    }

    const filteredList = fuse.search(searchTerm).map((results) => results.item);

    setFilteredList(filteredList);
  }, [fuse, searchTerm, setFilteredList, cineList]);

  return (
    <header className="navHeader searchBarContainer">
      <label htmlFor="searchBar">Recherche</label>
      <input
        type="search"
        name="searchBar"
        className="search"
        placeholder="Que voulez vous regardez"
        onChange={handleSearchTerm}
      />
    </header>
  );
}
