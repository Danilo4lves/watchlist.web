// Dependencies
import React from 'react';

// Components
import { Movie } from '../components';

// Styled components
import { Container, SearchInput, MoviesContainer } from './styles';

function App() {
  return (
    <Container>
      <SearchInput />

      <MoviesContainer>
        <Movie
          id="1"
          title="Pitch Perfect"
          synopsis="Pitch Perfect é uma série de filmes de comédia musical americana criada por Kay Cannon, vagamente baseada no livro de não ficção Pitch Perfect: The Quest for Collegiate a Cappella Glory de Mickey Rapkin. Jason Moore dirigiu o primeiro filme, e Elizabeth Banks dirigiu o segundo e Trish Sie dirigiu o terceiro."
          releaseDate="2020-07-22"
          categories={[
            'Comédia',
            'Musical',
            'Teste 1',
            'Teste 2',
            'Teste 3',
            'teste 4',
          ]}
          hasBeenWatched={false}
          isBeingWatched={false}
        />

        <Movie
          id="2"
          title="Pitch Perfect"
          synopsis="Pitch Perfect é uma série de filmes de comédia musical americana criada por Kay Cannon, vagamente baseada no livro de não ficção Pitch Perfect: The Quest for Collegiate a Cappella Glory de Mickey Rapkin. Jason Moore dirigiu o primeiro filme, e Elizabeth Banks dirigiu o segundo e Trish Sie dirigiu o terceiro."
          releaseDate="2020-07-22"
          categories={[
            'Comédia',
            'Musical',
            'Teste 1',
            'Teste 2',
            'Teste 3',
            'teste 4',
          ]}
          hasBeenWatched={true}
          isBeingWatched={false}
        />

        <Movie
          id="3"
          title="Pitch Perfect"
          synopsis="Pitch Perfect é uma série de filmes de comédia musical americana criada por Kay Cannon, vagamente baseada no livro de não ficção Pitch Perfect: The Quest for Collegiate a Cappella Glory de Mickey Rapkin. Jason Moore dirigiu o primeiro filme, e Elizabeth Banks dirigiu o segundo e Trish Sie dirigiu o terceiro."
          releaseDate="2020-07-22"
          categories={[
            'Comédia',
            'Musical',
            'Teste 1',
            'Teste 2',
            'Teste 3',
            'teste 4',
          ]}
          hasBeenWatched={true}
          isBeingWatched={true}
        />
      </MoviesContainer>
    </Container>
  );
}

export default App;
