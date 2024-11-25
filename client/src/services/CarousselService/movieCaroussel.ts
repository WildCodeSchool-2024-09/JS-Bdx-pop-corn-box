import type { AnimesResponse } from "../../types/AnimsProps";

export const fetchMovieCaroussel = async (): Promise<AnimesResponse> => {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/popular?language=fr-fr&page=1",
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
      },
    },
  );

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return await response.json(); //
};
