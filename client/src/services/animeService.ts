import type { MovieResponse } from "../types/MovieResponse";

export const fetchAllAnimes = async (
  pages: number,
  genre: number,
): Promise<MovieResponse> => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
    },
  };
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${pages}&sort_by=popularity.desc&with_genres=16&with_genres=${genre}`,
    options,
  );
  return response.json();
};
