import type { MovieResponse } from "../types/MovieResponse";

export const fetchAllSeries = async (pages: number): Promise<MovieResponse> => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
    },
  };
  const response = await fetch(
    `https://api.themoviedb.org/3/tv/top_rated?language=fr-FR&page=${pages}`,
    options,
  );
  if (!response.ok) {
    throw new Error(`Erreur de requête: ${response.status}`);
  }
  return response.json();
};
