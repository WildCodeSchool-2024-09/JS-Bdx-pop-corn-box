import type { MovieResponse } from "../../types/MovieResponse";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOTYxZjNkMjhmYjA0ODQwY2NiNDlkMmQzYjhlZTU1YiIsIm5iZiI6MTczMjcwMDc2My43Njk5NjcsInN1YiI6IjY3MjhlYWI3Mzk0MGMxMjAyZmY3ZDY4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hwagiPBngcyn3MsOLMD8aCv6GOP-pFcXeEQrySsdrws",
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
