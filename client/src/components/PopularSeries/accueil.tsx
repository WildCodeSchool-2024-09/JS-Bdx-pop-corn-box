import { useEffect, useState } from "react";
import Series from "./PopularSeries";

export default function PopularSeries() {
  const [series, setSeries] = useState([]);
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
      "https://api.themoviedb.org/3/tv/popular?language=en-fr&page=1",
      options,
    )
      .then((res) => res.json())
      .then((res) => setSeries(res.results))
      .catch((err) => console.error(err));
  }, []);
  const SeriePath = "https://image.tmdb.org/t/p/w500/";
  return (
    <>
      <Series series={series} SeriePath={SeriePath} />
    </>
  );
}
