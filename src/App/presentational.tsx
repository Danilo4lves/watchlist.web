// Dependencies
import React from 'react';

// Components
import { Movie } from '../components';

// Styled components
import { Container, SearchInput, MoviesContainer } from './styles';

// Types
import { AppPresentationalPropsInterface } from './types';

function AppPresentational(props: AppPresentationalPropsInterface) {
  const {
    filteredMoviesList,

    removeMovie,
    handleSearchInputOnChange,
  } = props;

  return (
    <Container>
      <SearchInput onChange={handleSearchInputOnChange} />

      <MoviesContainer>
        {filteredMoviesList.map(movie => {
          const {
            id,
            title,
            synopsis,
            release_date,
            categories,
            has_been_watched,
            is_being_watched,
          } = movie;

          return (
            <Movie
              id={id}
              title={title}
              synopsis={synopsis}
              releaseDate={release_date}
              categories={categories}
              hasBeenWatched={has_been_watched}
              isBeingWatched={is_being_watched}
              deleteButtonOnClick={async () => {
                await removeMovie(id);
              }}
            />
          );
        })}
      </MoviesContainer>
    </Container>
  );
}

export default AppPresentational;
