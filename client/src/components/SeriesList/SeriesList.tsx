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
  const [pages, setPages] = useState(1);
  console.info(setPages);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
    },
  };

  useEffect(() => {
    let allResults: SeriesListProps[] = [];
    let currentPage = 1;

    const fetchAllPages = () => {
      fetch(
        `https://api.themoviedb.org/3/tv/top_rated?language=fr-FR&page=${pages}`,
        options,
      )
        .then((response) => response.json())
        .then((data) => {
          allResults = [...allResults, ...data.results].slice(0, 102);
          if (currentPage < data.total_pages) {
            currentPage++;
            fetchAllPages();
          } else {
            setSeriesList(allResults);
            setFilteredList(allResults);
          }
        })
        .catch((error) =>
          console.error("Erreur lors de la récupération :", error),
        );
    };

    fetchAllPages();
  }, [pages]);

  return (
    <>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        cineList={seriesList}
        setFilteredList={setFilteredList}
      />
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
    </>
  );
}
