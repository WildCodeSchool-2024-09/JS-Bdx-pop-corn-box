import Slider from "react-slick";
import { settingsMovies } from "../../../../services/SettingCaroussel/SettingsCaroussel";

interface MoviesProps {
  movies: {
    id: number;
    title: string;
    poster_path: string;
    overview: string;
    vote_average: string;
    vote_count: number;
    release_date: string;
  }[];
  MoviePath: string;
}

export default function MoviesCaroussel({ movies, MoviePath }: MoviesProps) {
  return (
    <main className="slider-container">
      <Slider {...settingsMovies}>
        {movies.map((movie) => (
          <section className="home-movieList" key={movie.id}>
            <figure className="movie-content">
              <img
                className="movie-img"
                src={`${MoviePath}${movie.poster_path}`}
                alt={movie.title}
              />
              <figcaption className="hover-text">
                <p>{movie.overview}</p>
                <p>{movie.vote_average} ⭐</p>
                <p>{movie.vote_count}❤️</p>
                <p>Date de sortie: {movie.release_date}</p>
              </figcaption>
            </figure>
          </section>
        ))}
      </Slider>
    </main>
  );
}
