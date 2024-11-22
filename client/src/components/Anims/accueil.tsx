import { useEffect, useState } from "react";
import "./Anims";
import AnimsMostViewed from "./Anims";

function PopularAnims() {
  const [anims, setAnims] = useState([]);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOTYxZjNkMjhmYjA0ODQwY2NiNDlkMmQzYjhlZTU1YiIsIm5iZiI6MTczMDg4NzY5OS43Mjc1MTE2LCJzdWIiOiI2NzI4ZWFiNzM5NDBjMTIwMmZmN2Q2ODEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0._wd1EUDlhgem0CdseijkxOfTQ_oEO9XLn5-vfTszIFg",
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
    <>
      <AnimsMostViewed anims={anims} AnimPath={AnimPath} />
    </>
  );
}
export default PopularAnims;
