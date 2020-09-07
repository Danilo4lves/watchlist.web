// Dependencies
import React from 'react';
import { format } from 'date-fns';

// Styled components
import {
  Container,
  Content,
  Title,
  Tooltip,
  BadgesContainer,
  SynopsisBadge,
  WatchedBadge,
  ReleaseDate,
  Category,
  ActionsContainer,
  UpdateButton,
  DeleteButton,
} from './styles';

// Types
import { MoviePropsInterface } from './types';

function Movie(props: MoviePropsInterface) {
  const {
    className,
    id,
    title,
    synopsis,
    releaseDate,
    categories = [],
    hasBeenWatched,
    isBeingWatched,
  } = props;

  const tooltipId = `movie-synopsis-tooltip-id-${id}`;

  let watchedBadgeLabel = 'NÃO assistido';

  if (hasBeenWatched) {
    watchedBadgeLabel = 'Assistido';
  }

  if (isBeingWatched) {
    watchedBadgeLabel = 'Assistindo';
  }

  const formattedReleaseDate = React.useMemo(() => {
    const releaseDateInstance = new Date(releaseDate);
    const formattedDate = format(releaseDateInstance, 'dd/MM/yyyy');

    return formattedDate;
  }, []);

  return (
    <Container className={className}>
      <Content>
        <Tooltip id={tooltipId}>
          <span>{synopsis}</span>
        </Tooltip>

        <Title>{title}</Title>

        <BadgesContainer>
          <SynopsisBadge data-tip data-for={tooltipId}>
            Sinópse
          </SynopsisBadge>

          <WatchedBadge
            hasBeenWatched={hasBeenWatched}
            isBeingWatched={isBeingWatched}
          >
            {watchedBadgeLabel}
          </WatchedBadge>
        </BadgesContainer>

        <ReleaseDate>
          Data de lançamento: <strong>{formattedReleaseDate}</strong>
        </ReleaseDate>

        <BadgesContainer>
          {categories.map(categoryName => (
            <Category>{categoryName}</Category>
          ))}
        </BadgesContainer>
      </Content>

      <ActionsContainer>
        <UpdateButton>
          <span>Editar</span>
        </UpdateButton>

        <DeleteButton>
          <span>Remover</span>
        </DeleteButton>
      </ActionsContainer>
    </Container>
  );
}

export default Movie;
