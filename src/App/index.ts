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
  });
}

export default App;
