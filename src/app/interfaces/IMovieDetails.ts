interface belongs_to_collection{
  id: number,
  name: string,
  poster_path: string,
  backdrop_path: string
}
interface genres {
  id:number,
  name: string
}
interface production_companies{
  id: number,
  logo_path: string | null,
  name: string,
  origin_country: string
}
interface production_countries{
  iso_3166_1: string,
  name: string
}
interface spoken_languages{
  english_name: string | null,
  iso_639_1: string,
  name: string
}

export interface IMovieDetails {
  adult: boolean,
  backdrop_path: string | null,
  belongs_to_collection: belongs_to_collection | null,
  budget: number,
  genres: genres[],
  homepage: string | null,
  id: number,
  imdb_id: string | null,
  original_language: string,
  original_title: string,
  overview: string | null,
  popularity: number,
  poster_path: string | null,
  production_companies: production_companies[],
  production_countries: production_countries[],
  release_date: string,
  revenue: number,
  runtime: number | null,
  spoken_languages: spoken_languages[],
  status: string,
  tagline: string | null,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number
}
