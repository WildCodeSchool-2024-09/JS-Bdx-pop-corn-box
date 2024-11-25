import type { CineListProps } from "./CineListProps";

export type FetchMovie = {
  setCineList: (cine: CineListProps[]) => void;
  setFilteredList: (cine: CineListProps[]) => void;
};
