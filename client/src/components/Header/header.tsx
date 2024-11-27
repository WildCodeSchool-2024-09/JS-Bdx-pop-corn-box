import { Link, Outlet } from "react-router-dom";
import "./header.css";
import Navigation from "./MenuBurger/MenuBurger";
export default function Header() {
  return (
    <>
      <header className="top">
        <Link to="/">
          <img src="/pop-corn_Box.png" alt="logo Pop Corn Box" />
        </Link>
        <Navigation />
      </header>
      <Outlet />
    </>
  );
}
