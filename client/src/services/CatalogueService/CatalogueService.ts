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
    `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=fr&page=${pages}&sort_by=popularity.desc&with_genres=16`,
    options,
  );
  return response.json();
};

export const fetchAllMovies = async (
  pages: number,
  genre?: number,
): Promise<MovieResponse> => {
  const response =
    genre !== undefined
      ? await fetch(
          `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=fr&page=${pages}1&sort_by=popularity.desc&with_genres=${genre}`,
          options,
        )
      : await fetch(
          `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=fr&page=${pages}1&sort_by=popularity.desc`,
          options,
        );
  if (!response.ok) {
    throw new Error(`erreur de requête: ${response.status}`);
  }
  return response.json();
};

export const fetchAllSeries = async (
  pages: number,
  genre?: number,
): Promise<MovieResponse> => {
  const response =
    genre !== undefined
      ? await fetch(
          `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=fr&page=${pages}&sort_by=popularity.desc&without_genres=16&with_genres=${genre}`,
          options,
        )
      : await fetch(
          `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=fr&page=${pages}&sort_by=popularity.desc&without_genres=16`,
          options,
        );
  if (!response.ok) {
    throw new Error(`Erreur de requête: ${response.status}`);
  }
  return response.json();
};
