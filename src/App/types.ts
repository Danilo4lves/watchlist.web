export interface MovieInterface {
  id: string;
  title: string;
  synopsis: string;
  release_date: string;
  categories: string[];
  has_been_watched: boolean;
  is_being_watched: boolean;
}

export interface AppPresentationalPropsInterface {
  moviesList: MovieInterface[];
}
