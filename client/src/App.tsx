

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CssComponents/Crrousels.css";
import PopularAnims from "./components/Anims/accueil";
import PopularMovies from "./components/PopularMovies/acceuil";
import PopularSeries from "./components/PopularSeries/accueil";
function App() {
  return (
    <>
      <figcaption className="title">Popular Movies</figcaption>
      <PopularMovies />
      <figcaption className="title">Popular Series</figcaption>
      <PopularSeries />
      <figcaption className="title">Popular Anims</figcaption>
      <PopularAnims />

    </>
  );
}
