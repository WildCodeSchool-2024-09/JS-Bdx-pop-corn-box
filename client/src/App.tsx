import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CssComponents/Crrousels.css";
import PopularAnims from "./components/Anims/accueil";
import PopularMovies from "./components/PopularMovies/acceuil";
import PopularSeries from "./components/PopularSeries/accueil";
import Header from "./components/header";
function App() {
  return (
    <>
      <Header />
      <h2 className="title">Popular Movie</h2>
      <PopularMovies />
      <h2 className="title">Popular Series</h2>
      <PopularSeries />
      <h2 className="title">Popular Anims</h2>
      <PopularAnims />
    </>
  );
}

export default App;
