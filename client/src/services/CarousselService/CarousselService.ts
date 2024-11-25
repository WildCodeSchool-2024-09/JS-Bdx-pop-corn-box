import type { AnimesResponse } from "../../types/AnimsProps";

export const fetchAnimeCaroussel = async (): Promise<AnimesResponse> => {
  const response = await fetch(
    "https://api.themoviedb.org/3/search/tv?query=animation&include_adult=false&language=fr-FR&page=1",
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

export const fetchSerieCaroussel = async (): Promise<AnimesResponse> => {
  const response = await fetch(
    "https://api.themoviedb.org/3/tv/popular?language=en-fr&page=1",
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
