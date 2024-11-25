import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
  },
};

const WatchList = () => {
  const { id } = useParams();
  const [item, setItem] = useState<any>(null);

  useEffect(() => {
    const fetchItemDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}`,
          options,
        );

        if (!response.ok) {
          throw new Error(`Erreur ${response.status}: ${response.statusText}`);
        }
        const data = await response.json();
        setItem(data);
      } catch (error) {
        console.error("Erreur lors de la récupératon des détails", error);
      }
    };
    fetchItemDetails();
  }, [id]);
  if (!item) return <p>Chargement...!</p>;
  return (
    <>
      <h2>{item.title || item.name}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
        alt={item.title || item.name}
      />
      <p>{item.overview}</p>
      <p>{item.vote_average} ⭐</p>
      <p>{item.vote_count}❤️</p>
      <p>Date de sortie: {item.release_date}</p>
    </>
  );
};

export default WatchList;
