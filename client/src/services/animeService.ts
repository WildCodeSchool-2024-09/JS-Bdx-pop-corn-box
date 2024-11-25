import type { MovieResponse } from "../types/MovieResponse";

export const fetchAllAnimes = async (pages: number): Promise<MovieResponse> => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
    },
  };
  const response = await fetch(
    `https://api.themoviedb.org/3/search/tv?query=animation&include_adult=false&language=fr-FR&page=${pages}`,
    options,
  );
  return response.json();
};
