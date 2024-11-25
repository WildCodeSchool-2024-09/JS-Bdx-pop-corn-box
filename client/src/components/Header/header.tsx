import { Link, Outlet } from "react-router-dom";
import "./header.css";
import "../../services/root.css";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
export default function Header() {
  const [visible, setVisible] = useState(false);
  const handleClick = () => {
    if (visible === false) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  return (
    <>
      <header id="top">
        <Link to="/">
          <img src="./public/pop-corn_Box.png" alt="logo Pop Corn Box" />
        </Link>

        <nav className="navHeader">
          <Link to="/">Accueil</Link>
          <Link to="/Movies">Films</Link>
          <Link to="/series">Series</Link>
          <Link to="/animes">Animes</Link>
        </nav>
        <nav className={visible ? "listHamburger active" : "listHamburger"}>
          <Link to="/">Accueil</Link>
          <Link to="/Movies">Films</Link>
          <Link to="/series">Series</Link>
          <Link to="/animes">Animes</Link>
          <Link to="/WatchList">WatchList</Link>
        </nav>
        <input type="text" placeholder="Rechercher..." />
        <Link className="navHeader" to="/WatchList">
          WatchList
        </Link>
        <FontAwesomeIcon icon={faBars} onClick={handleClick} />
      </header>
      <Outlet />
    </>
  );
}
