// Dependencies
import React from 'react';

// Presentational
import AppPresentational from './presentational';

// Services
import { MovieService } from '../services';

// Types
import { MovieInterface } from './types';

function App() {
  const searchInputRef: React.RefObject<HTMLInputElement> | null = React.useRef<
    HTMLInputElement
  >(null);

  const [moviesList, setMoviesList] = React.useState<MovieInterface[]>([]);
  const [filteredMoviesList, setFilteredMoviesList] = React.useState<
    MovieInterface[]
  >([]);

  const removeMovie = React.useCallback(
    async (id: string) => {
      const apiResponse = await MovieService.remove(id);

      if (apiResponse?.data?.ok) {
        const { data = {} } = apiResponse;
        const { data: deletedMovie } = data;

        const newMoviesList = moviesList.filter(
          movie => deletedMovie?.id !== movie?.id,
        );

        setMoviesList(newMoviesList);

        if (searchInputRef?.current) {
          searchInputRef.current.value = '';
        }
      }
    },
    [moviesList],
  );

  React.useEffect(() => {
    async function fetchMoviesList() {
      const apiResponse = await MovieService.getAll();

      if (apiResponse?.data?.ok) {
        const { data = {} } = apiResponse;
        const { data: movies = [] } = data;

        setMoviesList(movies);
      } else {
        console.error(apiResponse?.data?.error?.message);
      }
    }

    fetchMoviesList();
  }, []);

  React.useEffect(() => {
    setFilteredMoviesList([...moviesList]);
  }, [moviesList]);

  const handleSearchInputOnChange = React.useCallback(
    event => {
      const { target = {} } = event;
      const { value } = target;

      const newFilteredMoviesList = moviesList.filter(movie => {
        const { title } = movie;

        const upperCaseSearchTerm = value?.toUpperCase();
        const upperCaseMovieTitle = title?.toUpperCase();

        return upperCaseMovieTitle?.includes(upperCaseSearchTerm);
      });

      setFilteredMoviesList(newFilteredMoviesList);
    },
    [moviesList],
  );

  const [isWatchFormOpen, setIsWatchFormOpen] = React.useState(false);

  const openWatchForm = React.useCallback(() => {
    setIsWatchFormOpen(true);
  }, []);

  const closeWatchForm = React.useCallback(() => {
    setIsWatchFormOpen(false);
  }, []);

  return React.createElement(AppPresentational, {
    searchInputRef,

    filteredMoviesList,
    isWatchFormOpen,

    removeMovie,
    handleSearchInputOnChange,
    openWatchForm,
    closeWatchForm,
  });
}

export default App;
