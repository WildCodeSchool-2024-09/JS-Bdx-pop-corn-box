import Slider from "react-slick";

interface MoviesProps {
  movies: {
    id: number;
    title: string;
    poster_path: string;
    overview: string;
    vote_average: string;
    vote_count: string;
    release_date: string;
  }[];
  MoviePath: string;
}

export default function MoviesCaroussel({ movies, MoviePath }: MoviesProps) {
  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,

    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          autoplay: true,
          autoplaySpeed: 3000,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="slider-container">
      <Slider {...settings}>
        {movies.map((movie) => (
          <figure className="container1" key={movie.id}>
            <img
              className="movie-img"
              src={`${MoviePath}${movie.poster_path}`}
              alt={movie.title}
            />
            <figcaption className="overview">
              <p>{movie.overview}</p>
              <p>{movie.vote_average} ⭐</p>
              <p>{movie.vote_count}❤️</p>
              <p>Date de sortie: {movie.release_date}</p>
            </figcaption>
          </figure>
        ))}
      </Slider>
    </section>
  );
}
