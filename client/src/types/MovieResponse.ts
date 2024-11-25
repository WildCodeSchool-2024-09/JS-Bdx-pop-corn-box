export interface MovieResponse {
  page: number;
  results: {
    id: number;
    title: string;
    name?: string;
    poster_path: string;
    overview: string;
    vote_average: string;
    vote_count: number;
    release_date: string;
  }[];
  total_pages: number;
  total_results: number;
}
