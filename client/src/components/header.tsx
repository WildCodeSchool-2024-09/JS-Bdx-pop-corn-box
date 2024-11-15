import { Link, Outlet } from "react-router-dom";
import logo from "../../public/boite_de_popcorn_0.png";
import "./header.css";

export default function Header() {
  return (
    <>
      <header>
        <Link to="/">
          <img src={logo} width={25} height={44} alt="logo" />
        </Link>

        <nav>
          <Link to="/">Accueil</Link>
          <Link to="/Movies">Films</Link>
          <Link to="/series">Series</Link>
          <Link to="/animes">Animes</Link>
        </nav>

        <input type="text" placeholder="Rechercher..." />
        <Link to="/MesPréferences">Préferences</Link>
        <Link to="/WatchList">WatchList</Link>
      </header>
      <Outlet />
    </>
  );
}
