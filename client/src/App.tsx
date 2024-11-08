import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Link to="/movies">Movies</Link>
      <Link to="/">Accueil</Link>
      <Outlet />
    </>
  );
}

export default App;
