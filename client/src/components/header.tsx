import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link to="/">
        <img src="" alt="logo" />
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="#">Films</Link>
          </li>
          <li>
            <Link to="#">Séries</Link>
          </li>
          <li>
            <Link to="">Animes</Link>
          </li>
        </ul>
      </nav>

      <form action="">
        <label htmlFor="">
          <input type="text" placeholder="recheche" />
        </label>
      </form>
      <ul>
        <li>
          <Link to="#">Mes préférences</Link>
        </li>
        <li>
          <Link to="#">Watchlist</Link>
        </li>
      </ul>
    </header>
  );
}
