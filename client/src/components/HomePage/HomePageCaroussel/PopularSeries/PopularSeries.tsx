import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
interface SeriesProps {
  series: {
    id: number;
    poster_path: string;
    name: string;
    overview: string;
  }[];
  SeriePath: string;
}

export default function Series({ series, SeriePath }: SeriesProps) {
  const navigate = useNavigate();

  const handleMovieClick = (serieId: number) => {
    navigate(`/Watchlist/${serieId}`);
  };
  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <section className="slider-container">
      <Slider {...settings}>
        {series.map((serie) => (
          <article key={serie.id}>
            <img
              onClick={() => handleMovieClick(serie.id)}
              src={`${SeriePath}${serie.poster_path}`}
              alt={serie.name}
            />
          </article>
        ))}
      </Slider>
    </section>
  );
}
