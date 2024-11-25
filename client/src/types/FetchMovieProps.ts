import type { CineListProps } from "./CineListProps";

export type FetchMovie = {
  setCineList: React.Dispatch<React.SetStateAction<CineListProps[]>>;
  setFilteredList: React.Dispatch<React.SetStateAction<CineListProps[]>>;
};
