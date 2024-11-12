import { Link } from "react-router-dom";
import logo from '../../public/boite_de_popcorn_0.png'
import "./header.css"

export default function Header() {
    return (
        <>
            <header>
                <Link to="/"><img src={logo} width={25} height={44} alt="logo" /></Link>
                <nav>
                    <ul>
                        <li><Link to="/">Accueil</Link></li>
                        <li><Link to='/films'>Films</Link></li>
                        <li><Link to='/series'>Series</Link></li>
                        <li><Link to='/animes'>Animes</Link></li>
                    </ul>
                </nav>
                <input type="text" placeholder="Rechercher..." />
                <nav>
                    <ul>
                        <li><Link to='/MesPréferences'>Préferences</Link></li>
                        <li><Link to='/WatchList'>WatchList</Link></li>
                    </ul>
                </nav>

            </header>
        </>
    );
}
