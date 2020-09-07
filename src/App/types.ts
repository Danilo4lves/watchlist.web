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
  searchInputRef: React.RefObject<HTMLInputElement> | null;
  filteredMoviesList: MovieInterface[];
  isWatchFormOpen: boolean;
  removeMovie(id: string): Promise<void>;
  handleSearchInputOnChange(event: React.ChangeEvent<HTMLInputElement>): void;
  openWatchForm(): void;
  closeWatchForm(): void;
}
