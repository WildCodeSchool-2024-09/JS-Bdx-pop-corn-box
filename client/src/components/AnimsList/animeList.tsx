import { useEffect, useState } from "react";
import "./style.css";

import SearchBar from "../SearchBar/searchBar";

export type AnimeListProps = {
  id: number;
  title: string;
  name: string;
  poster_path: string;
  overview: string;
  vote_average: string;
  vote_count: number;
  release_date: string;
};

export default function AnimeList() {
  const [animeList, setAnimeList] = useState<AnimeListProps[]>([]);
  const [filteredList, setFilteredList] = useState<AnimeListProps[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
    },
  };

  useEffect(() => {
    let allResults: AnimeListProps[] = [];
    let currentPage = 1;

    const fetchAllPages = () => {
      fetch(
        `https://api.themoviedb.org/3/search/tv?query=animation&include_adult=false&language=fr-FR&page=${currentPage}`,
        options,
      )
        .then((response) => response.json())
        .then((data) => {
          allResults = [...allResults, ...data.results];
          if (currentPage < data.total_pages) {
            currentPage++;
            fetchAllPages();
          } else {
            setAnimeList(allResults);
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
        cineList={animeList}
        setFilteredList={setFilteredList}
      />
      {isLoading ? (
        <p>Chargement...</p>
      ) : (
        <main className="animeContainer">
          {filteredList.map((anime: AnimeListProps) => (
            <section key={anime.id} className="animeList">
              <figure className="anime-content">
                <img
                  src={`https://image.tmdb.org/t/p/w500${anime.poster_path}`}
                  alt={anime.title || anime.name}
                />
                <figcaption className="anime-hover-text">
                  <h2>{anime.title || anime.name}</h2>
                  <p>{anime.overview}</p>
                  <p>{anime.vote_average} ⭐</p>
                  <p>{anime.vote_count} ❤️</p>
                  <p>Date de sortie: {anime.release_date}</p>
                </figcaption>
              </figure>
            </section>
          ))}
        </main>
      )}
    </>
  );
}
