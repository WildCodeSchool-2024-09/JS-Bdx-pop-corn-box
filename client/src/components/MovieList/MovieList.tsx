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
  const [totalPages, setTotalPages] = useState(1);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOTYxZjNkMjhmYjA0ODQwY2NiNDlkMmQzYjhlZTU1YiIsIm5iZiI6MTczMDczNzc3NS4zOTM1ODY2LCJzdWIiOiI2NzI4ZWFiNzM5NDBjMTIwMmZmN2Q2ODEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.3hTxfLqEU-mn3vqvTs8JvvATPzSiqY67QyMwfhgbGy8",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?language=fr&page=${pages}`,
      options,
    )
      .then((res) => res.json())
      .then((data) => {
        setCineList(data.results);
        setFilteredList(data.results);
        setTotalPages(data.total_pages);
      })
      .catch((err) => console.error(err));
  }, [pages]);

  const handleNextPage = () => {
    setPages(() => (pages < totalPages ? pages + 1 : pages));
  };
  const handlePrevPage = () => {
    setPages(() => (pages > 1 ? pages - 1 : pages));
  };
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

      <button onClick={handleNextPage} type="button">
        Suivant {pages}/319
      </button>
      <button onClick={handlePrevPage} type="button">
        Précédent
      </button>
    </>
  );
}
