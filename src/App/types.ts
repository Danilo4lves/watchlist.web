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
  filteredMoviesList: MovieInterface[];
  removeMovie(id: string): Promise<void>;
  handleSearchInputOnChange(event: React.ChangeEvent<HTMLInputElement>): void;
}
