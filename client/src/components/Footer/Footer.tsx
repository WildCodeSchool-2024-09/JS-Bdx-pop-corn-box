import { Link } from "react-router-dom";
import "./Footer.css";
export default function Footer() {
  return (
    <footer>
      <nav className="footerNav">
        <Link to="/About">About</Link>
        <a href="#top">Haut de page</a>
      </nav>
      <p>
        WildCodeSchool and <strong>TMDB </strong>
        ©2024 - All rights reserved
      </p>
    </footer>
  );
}
