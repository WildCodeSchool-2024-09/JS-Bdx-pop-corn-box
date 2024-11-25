import { useEffect, useState } from "react";
import "./style.css";
import SearchBar from "../SearchBar/searchBar";

export type CineListProps = {
  id: number;
  title: string;
  name: string;
  poster_path: string;
  overview: string;
  vote_average: string;
  vote_count: number;
  release_date: string;
};

export default function MoviesList() {
  const [cineList, setCineList] = useState<CineListProps[]>([]);
  const [filteredList, setFilteredList] = useState<CineListProps[]>([]);
  const [pages, setPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  console.info(setPages);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
    },
  };
  useEffect(() => {
    let allResults: CineListProps[] = [];
    let currentPage = 1;

    const fetchAllPages = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/now_playing?language=fr&page=${pages}`,
        options,
      )
        .then((response) => response.json())
        .then((data) => {
          allResults = [...allResults, ...data.results].slice(0, 102);
          if (currentPage < data.total_pages) {
            currentPage++;
            fetchAllPages();
          } else {
            setCineList(allResults);
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
        cineList={cineList}
        setFilteredList={setFilteredList}
      />
      <h1>Les films</h1>
      <main className="movieContainer">
        {filteredList.map((movie: CineListProps) => (
          <section key={movie.id} className="movieList">
            <figure className="movie-content">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <figcaption className="movie-hover-text">
                <h2>{movie.title}</h2>
                <p>{movie.overview}</p>
                <p>{movie.vote_average} ⭐</p>
                <p>{movie.vote_count}❤️</p>
                <p>Date de sortie: {movie.release_date}</p>
              </figcaption>
            </figure>
          </section>
        ))}
      </main>
    </>
  );
}
