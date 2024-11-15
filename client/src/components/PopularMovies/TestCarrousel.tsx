import Slider from "react-slick";

interface MoviesProps {
  movies: {
    id: number;
    title: string;
    poster_path: string;
    overview: string;
  }[];
  MoviePath: string;
}

export default function CenterMode({ movies, MoviePath }: MoviesProps) {
  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
  };

  return (
    <section className="slider-container">
      <Slider {...settings}>
        {movies.map((movie) => (
          <article className="container1" key={movie.id}>
            <img
              className="movie-img"
              src={`${MoviePath}${movie.poster_path}`}
              alt={movie.title}
            />
            <p className="overview">{movie.overview}</p>
          </article>
        ))}
      </Slider>
    </section>
  );
}
