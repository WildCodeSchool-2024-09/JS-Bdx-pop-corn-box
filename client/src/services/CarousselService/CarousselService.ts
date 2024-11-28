import type { AnimesResponse } from "../../types/AnimsProps";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOTYxZjNkMjhmYjA0ODQwY2NiNDlkMmQzYjhlZTU1YiIsIm5iZiI6MTczMjcwMDc2My43Njk5NjcsInN1YiI6IjY3MjhlYWI3Mzk0MGMxMjAyZmY3ZDY4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hwagiPBngcyn3MsOLMD8aCv6GOP-pFcXeEQrySsdrws",
  },
};

export const fetchAnimeCaroussel = async (): Promise<AnimesResponse> => {
  const response = await fetch(
    "https://api.themoviedb.org/3/search/tv?query=animation&include_adult=false&language=fr-FR&page=1",
    options,
  );

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return await response.json(); //
};

export const fetchMovieCaroussel = async (): Promise<AnimesResponse> => {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/popular?language=fr-fr&page=1",
    options,
  );

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return await response.json(); //
};

export const fetchSerieCaroussel = async (): Promise<AnimesResponse> => {
  const response = await fetch(
    "https://api.themoviedb.org/3/tv/popular?language=fr&page=1",
    options,
  );

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return await response.json(); //
};
