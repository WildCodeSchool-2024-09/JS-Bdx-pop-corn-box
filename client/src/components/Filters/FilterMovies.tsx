import { useEffect, useState } from "react";

type Categories = {
  id: number;
  name: string;
};
interface filterMovieProps {
  filterProps: (genreId: number | undefined) => void;
}
export default function FilterMovies({ filterProps }: filterMovieProps) {
  const [categories, setCategories] = useState<Categories[]>();
  const filterGenres = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value === "") {
      filterProps(undefined);
    } else {
      filterProps(+event.target?.value);
    }
  };
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
      },
    };
    fetch("https://api.themoviedb.org/3/genre/movie/list?language=fr", options)
      .then((res) => res.json())
      .then((data) => setCategories(data.genres))
      .catch((err) => console.error(err));
  });
  return (
    <select onChange={(event) => filterGenres(event)} id="categoryFilter">
      <option value="">Toutes les catégories</option>
      {categories?.map((category) => (
        <option value={category.id} key={category.id}>
          {category.name}
        </option>
      ))}
    </select>
  );
}
