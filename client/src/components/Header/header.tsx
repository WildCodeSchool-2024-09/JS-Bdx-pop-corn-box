import { Link, Outlet } from "react-router-dom";
import "./header.css";
export default function Header() {
  return (
    <>
      <header>
        <Link to="/">
          <img src="./public/pop-corn_Box.png" alt="logo Pop Corn Box" />
        </Link>

        <nav>
          <Link to="/">Accueil</Link>
          <Link to="/Movies">Films</Link>
          <Link to="/series">Series</Link>
          <Link to="/animes">Animes</Link>
        </nav>
        <input className="searchBar" type="text" placeholder="Rechercher..." />
        <Link to="/WatchList">WatchList</Link>
      </header>
      <Outlet />
    </>
  );
}
