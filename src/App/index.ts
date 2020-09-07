// Dependencies
import React from 'react';

// Presentational
import AppPresentational from './presentational';

// Services
import { MovieService } from '../services';

// Types
import { MovieInterface } from './types';

function App() {
  const [moviesList, setMoviesList] = React.useState<MovieInterface[]>([]);

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

  return React.createElement(AppPresentational, {
    moviesList,

    removeMovie,
  });
}

export default App;
