import Slider from "react-slick";

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
  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          autoplay: false,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <main className="slider-container">
      <Slider {...settings}>
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
