import "slick-carousel/slick/slick.css";
import { useLocation } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import PopularAnims from "./HomePageCaroussel/AnimesCaroussel/FetchCarousselAnime";
import PopularMovies from "./HomePageCaroussel/MoviesCaroussel/FetchMovie";
import PopularSeries from "./HomePageCaroussel/SeriesCaroussel/FetchSerieCaroussel";

export default function HomePage() {
  const Carousel = () => {
    const location = useLocation();
    if (location.pathname !== "/") {
      return null;
    }
    return (
      <>
        <h2>Films tendances du moment</h2>
        <PopularMovies />
        <h2>Series populaire</h2>
        <PopularSeries />
        <h2>Animes populaire</h2>
        <PopularAnims />
      </>
    );
  };

  return (
    <section>
      <Carousel />
    </section>
  );
}
