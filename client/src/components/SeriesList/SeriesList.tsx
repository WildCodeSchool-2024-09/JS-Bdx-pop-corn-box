import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

type Serie = {
  id: number;
  title: string;
  overview?: string;
  likeButton: number;
  poster_path: string;
  vote_count: number;
  vote_average: number;
  likes: number;
  isLiked: boolean;
};

export default function SeriesList() {
  const [series, setSeries] = useState<Serie[]>([]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NjdkNmE4MTkwNmM3YjNlMzhhOWM3MmZmYWEzOTM1NyIsIm5iZiI6MTczMTQwNTc5NS40MTI0NDMyLCJzdWIiOiI2NzI4ZjE0NDc2MTk3OWYwMDVlMmQ5ZTAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.KQOdA6zxIaqYoWfgwRlxImq31ln3Y_xwscsqqkz93wA",
      },
    };
    fetch(
      "https://api.themoviedb.org/3/tv/top_rated?language=fr-US&page=1",
      options,
    )
      .then((res) => res.json())
      .then((data) =>
        setSeries(
          data.results.map((serie: Serie) => ({
            ...serie,
            vote_count: serie.vote_count,
            vote_average: serie.vote_average,
          })),
        ),
      )
      .catch((err) => console.error(err));
  }, []);

  const handleLike = (id: number) => {
    setSeries((prevSeries) =>
      prevSeries.map((serie) =>
        serie.id === id
          ? {
              ...serie,
              likes: serie.isLiked ? serie.likes + 1 : serie.likes - 1,
              isLiked: !serie.isLiked,
            }
          : serie,
      ),
    );
  };

  return (
    <section className="slider-container">
      <h2 className="carousel-title">Les séries du moment</h2>
      <Slider {...settings}>
        {series.map((serie) => (
          <section key={serie.id}>
            <article className="image-wrapper">
              <img
                src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
                alt={serie.title}
              />
              {serie.overview && (
                <p className="overview-text">{serie.overview}</p>
              )}
              <span className="like-button-container">
                <button
                  type="button"
                  className="like-button"
                  onClick={() => handleLike(serie.id)}
                  aria-label="Like"
                >
                  {serie.isLiked ? "💔" : "❤️"}
                </button>
                <span className="like-count">{serie.likes}</span>
              </span>
            </article>
          </section>
        ))}
      </Slider>
    </section>
  );
}
