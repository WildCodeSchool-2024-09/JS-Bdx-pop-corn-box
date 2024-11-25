import { useEffect, useState } from "react";
import Series from "./PopularSeries";

export default function PopularSeries() {
  const [series, setSeries] = useState([]);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
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
    <figure>
      <Series series={series} SeriePath={SeriePath} />
    </figure>
  );
}
