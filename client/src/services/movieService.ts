import type { MovieResponse } from "../types/MovieResponse";

export const fetchAllMovies = async (pages: number): Promise<MovieResponse> => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOTYxZjNkMjhmYjA0ODQwY2NiNDlkMmQzYjhlZTU1YiIsIm5iZiI6MTczMjQ3ODE0OS4wNDA3MDg1LCJzdWIiOiI2NzI4ZWFiNzM5NDBjMTIwMmZmN2Q2ODEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.EenXtaVA9fXlBBASut-fKCGnJyaqljDkviqN2fhJHhs",
    },
  };
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?language=fr&page=${pages}`,
    options,
  );
  if (!response.ok) {
    throw new Error(`erreur de requête: ${response.status}`);
  }
  return response.json();
};
