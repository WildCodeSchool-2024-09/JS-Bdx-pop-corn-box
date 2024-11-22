import { useEffect, useState } from "react";
import "../MovieList/style.css";

import SearchBar from "../SearchBar/searchBar";

export type SeriesListProps = {
  id: number;
  title: string;
  name: string;
  poster_path: string;
  overview: string;
  vote_average: string;
  vote_count: number;
  release_date: string;
};

export default function SeriesList() {
  const [seriesList, setSeriesList] = useState<SeriesListProps[]>([]);
  const [filteredList, setFilteredList] = useState<SeriesListProps[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOTYxZjNkMjhmYjA0ODQwY2NiNDlkMmQzYjhlZTU1YiIsIm5iZiI6MTczMDczNzc3NS4zOTM1ODY2LCJzdWIiOiI2NzI4ZWFiNzM5NDBjMTIwMmZmN2Q2ODEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.3hTxfLqEU-mn3vqvTs8JvvATPzSiqY67QyMwfhgbGy8",
    },
  };

  useEffect(() => {
    let allResults: SeriesListProps[] = [];
    let currentPage = 1;

    const fetchAllPages = () => {
      fetch(
        `https://api.themoviedb.org/3/tv/top_rated?language=fr-FR&page=${currentPage}`,
        options,
      )
        .then((response) => response.json())
        .then((data) => {
          allResults = [...allResults, ...data.results];
          if (currentPage < data.total_pages) {
            currentPage++;
            fetchAllPages();
          } else {
            setSeriesList(allResults);
            setFilteredList(allResults);
            setIsLoading(false);
          }
        })
        .catch((error) =>
          console.error("Erreur lors de la récupération :", error),
        );
    };

    fetchAllPages();
  }, []);

  return (
    <>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        cineList={seriesList}
        setFilteredList={setFilteredList}
      />
      {isLoading ? (
        <p>Chargement...</p>
      ) : (
        <main className="movieContainer">
          {filteredList.map((series: SeriesListProps) => (
            <section key={series.id} className="movieList">
              <figure className="movie-content">
                <img
                  src={`https://image.tmdb.org/t/p/w500${series.poster_path}`}
                  alt={series.title || series.name}
                />
                <figcaption className="movie-hover-text">
                  <h2>{series.title || series.name}</h2>
                  <p>{series.overview}</p>
                  <p>{series.vote_average} ⭐</p>
                  <p>{series.vote_count} ❤️</p>
                  <p>Date de sortie: {series.release_date}</p>
                </figcaption>
              </figure>
            </section>
          ))}
        </main>
      )}
    </>
  );
}
