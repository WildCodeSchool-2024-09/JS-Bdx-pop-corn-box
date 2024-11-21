import Slider from "react-slick";
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
          autoplay: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="slider-container">
      <Slider {...settings}>
        {series.map((serie) => (
          <article key={serie.id}>
            <img src={`${SeriePath}${serie.poster_path}`} alt={serie.name} />
          </article>
        ))}
      </Slider>
    </section>
  );
}
