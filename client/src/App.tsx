import "./App.css";
import { Link } from "react-router-dom";

import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <>
      <Link to="/Series">Séries</Link>
      <HomePage />
    </>
  );
}
