// import { useEffect, useState } from "react";
// import AnimeCard from "./animeCard";
// import "./animeList.css";

// type Anime = {
//   id: number;
//   name: string;
//   overview: string;
//   poster_path: string;
// };

// export default function AnimeList() {
//   const [cineList, setCineList] = useState<Anime[]>([]);

// const [page, setPage] = useState(1);
// const [totalPage, setTotalPage] = useState(1);
//   useEffect(() => {
//     const options = {
//       method: "GET",
//       headers: {
//         accept: "application/json",
//         Authorization:
//           "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5N2JiM2M0MjYxMmIxZWQzZGNmOWI1MGVjYTI4NTc0NSIsIm5iZiI6MTczMDk4MzA0NC43NjU1MTA4LCJzdWIiOiI2NzJiYmU2MGVjNWM2ZDUyOWZjNTVlM2MiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.9Q5ySfKNQUHO0E2pT_3cgO3_A0iH1uKL3haQjHkJfxg",
//       },
//     };

//     fetch(
//       `https://api.themoviedb.org/3/search/tv?query=animation&include_adult=false&language=en-US&page=${page}`,
//       options,
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         setCineList(data.results);
//         setTotalPage(data.total_pages);
//       })
//       .catch((err) => console.error(err));
//   }, [page]);

//   const handleClick = () => {
//     setPage(page + 1);
//   };
//   const handleClickPrez = () => {
//     setPage(page - 1);
//   };

//   return (
//     <>
//       <section className="animeContainer">
//         <h2>Animé page {page}</h2>
//         <article className="anime-grid">
//           {cineList.map((anime) => (
//             <AnimeCard key={anime.id} animeProps={anime} />
//           ))}
//         </article>

//         {page > 1 ? (
//           <button type="button" onClick={handleClickPrez}>
//             précedent
//           </button>
//         ) : null}
//         {page === totalPage ? null : (
//           <button type="button" onClick={handleClick}>
//             suivant
//           </button>
//         )}
//       </section>
//     </>
//   );
// }
