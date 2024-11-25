import type { MovieResponse } from "../../types/MovieResponse";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
  },
};
export const fetchAllAnimes = async (pages: number): Promise<MovieResponse> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/tv?query=animation&include_adult=false&language=fr-FR&page=${pages}`,
    options,
  );
  return response.json();
};

export const fetchAllMovies = async (pages: number): Promise<MovieResponse> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?language=fr&page=${pages}`,
    options,
  );
  if (!response.ok) {
    throw new Error(`erreur de requête: ${response.status}`);
  }
  return response.json();
};

export const fetchAllSeries = async (pages: number): Promise<MovieResponse> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/tv/top_rated?language=fr-FR&page=${pages}`,
    options,
  );
  if (!response.ok) {
    throw new Error(`Erreur de requête: ${response.status}`);
  }
  return response.json();
};
