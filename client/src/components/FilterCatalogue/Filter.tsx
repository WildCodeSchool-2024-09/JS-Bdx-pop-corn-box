import { useEffect, useState } from "react";

type Categories = {
  id: number;
  name: string;
};
export default function FilterCatalogue() {
  const [categories, setCategories] = useState<Categories[]>();
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
    <select id="categoryFilter">
      <option value="all">Toutes les catégories</option>
      {categories?.map((category) => (
        <option value={category.id} key={category.id}>
          {category.name}
        </option>
      ))}
    </select>
  );

}
// - crée un menu déroulant qui affiche les catagories. done
// - au clic sur la categorie ex(fantastique), recuperer les Datas de la categorie(film serie anime).
// - afficher seulement les films series animes fantastique.

// au clic recuperer le fetch de la page ex (film).
// dans se fetch prendre l'id correspondant a la categorie cliqué .
// afficher les film avec l'id correspondant 