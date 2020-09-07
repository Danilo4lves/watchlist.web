export interface MoviePropsInterface {
  className?: string;
  id: string;
  title: string;
  synopsis: string;
  releaseDate: string;
  categories: string[];
  hasBeenWatched: boolean;
  isBeingWatched: boolean;
  deleteButtonOnClick(): void;
}
