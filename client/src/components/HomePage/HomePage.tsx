import "slick-carousel/slick/slick.css";
import { useLocation } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import PopularAnims from "../Anims/accueil";
import PopularMovies from "../PopularMovies/acceuil";
import PopularSeries from "../PopularSeries/accueil";

export default function HomePage() {
  const Carousel = () => {
    const location = useLocation();
    if (location.pathname !== "/") {
      return null;
    }
    return (
      <>
        <PopularMovies />
        <PopularSeries />
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
