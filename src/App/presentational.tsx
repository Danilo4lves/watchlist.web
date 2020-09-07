// Dependencies
import React from 'react';

// Components
import { Movie } from '../components';
import { AddToWatchListForm } from './components';

// Styled components
import {
  Container,
  SearchInputContainer,
  SearchInput,
  AddButton,
  AddIcon,
  MoviesContainer,
} from './styles';

// Types
import { AppPresentationalPropsInterface } from './types';

function AppPresentational(props: AppPresentationalPropsInterface) {
  const {
    searchInputRef,

    filteredMoviesList,
    isWatchFormOpen,

    removeMovie,
    handleSearchInputOnChange,
    openWatchForm,
    closeWatchForm,
  } = props;

  const renderWatchForm = React.useCallback(() => {
    if (isWatchFormOpen) {
      return <AddToWatchListForm closeForm={closeWatchForm} />;
    }

    return null;
  }, [isWatchFormOpen, closeWatchForm]);

  return (
    <Container>
      <SearchInputContainer>
        <SearchInput
          ref={searchInputRef}
          onChange={handleSearchInputOnChange}
        />

        <AddButton onClick={openWatchForm}>
          <AddIcon />
        </AddButton>
      </SearchInputContainer>

      {renderWatchForm()}

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
