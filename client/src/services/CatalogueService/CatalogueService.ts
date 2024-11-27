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
