import Slider from "react-slick";

interface AnimsProps {
  anims: {
    id: number;
    poster_path: string;
    name: string;
    overview: string;
  }[];
  AnimPath: string;
}

export default function AnimsMostViewed({ anims, AnimPath }: AnimsProps) {
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
        {anims.map((anim) => (
          <article key={anim.id}>
            <img src={`${AnimPath}${anim.poster_path}`} alt={anim.name} />
          </article>
        ))}
      </Slider>
    </section>
  );
}
