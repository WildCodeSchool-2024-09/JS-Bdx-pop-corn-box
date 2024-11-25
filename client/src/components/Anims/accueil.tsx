import { useEffect, useState } from "react";
import "./Anims";
import AnimsMostViewed from "./Anims";

function PopularAnims() {
  const [anims, setAnims] = useState([]);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
    },
  };

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=16",
      options,
    )
      .then((res) => res.json())
      .then((res) => setAnims(res.results))
      .catch((err) => console.error(err));
  }, []);

  const AnimPath = "https://image.tmdb.org/t/p/w500/";

  return (
    <figure>
      <AnimsMostViewed anims={anims} AnimPath={AnimPath} />
    </figure>
  );
}
export default PopularAnims;
