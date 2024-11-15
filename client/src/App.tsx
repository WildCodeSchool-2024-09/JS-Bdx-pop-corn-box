import { Link, Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/header";

function App() {
  return (
    <>

      <Link to="/movies">Movies</Link>
      <Link to="/">Accueil</Link>
      <Outlet />

      <Header />

    </>
  );
}

export default App;
