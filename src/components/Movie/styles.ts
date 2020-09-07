// Dependencies
import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';
import { darken } from 'polished';

export const Container = styled.div.attrs<{ className?: string }>({
  className: 'movie',
})`
  display: flex;
`;

export const Content = styled.div.attrs({
  className: 'movie__content',
})`
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
  flex: 3;

  color: #627179;

  background-color: white;
  border-width: 1px;
  border-style: solid;
  border-color: #dae0e3;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border-right-color: #627179;

  > * {
    margin-bottom: 10px;
  }
`;

export const Tooltip = styled(ReactTooltip).attrs({
  className: 'movie__content__tooltip',
})`
  max-width: 300px;

  border-radius: 20px;

  > span {
    font-size: 14px;
    line-height: 16px;
    text-align: justify;
  }
`;

export const Title = styled.span.attrs({
  className: 'movie__content__title',
})`
  font-weight: 700;
  font-size: 18px;
  line-height: 16px;
  text-align: center;
`;

export const BadgesContainer = styled.div.attrs({
  className: 'movie__content__badges-container',
})`
  display: flex;
  flex-wrap: wrap;
`;

export const SynopsisBadge = styled.span.attrs(props => ({
  className: 'movie__badges-container__synopsis-badge',
  ...props,
}))`
  align-self: flex-start;
  padding: 3px 12px;

  font-size: 12px;
  line-height: 20px;

  background-color: #fafbfc;
  border-width: 1px;
  border-style: solid;
  border-radius: 6px;
  border-color: rgba(27, 31, 35, 0.15);
  box-shadow: 0 1px 0 rgba(27, 31, 35, 0.04),
    inset 0 1px 0 hsla(0, 0%, 100%, 0.25);
`;

const DefaultWatchedBadge = styled(SynopsisBadge).attrs({
  className: 'movie__badges-container__watched-bagde',
})``;

export const WatchedBadge = styled(DefaultWatchedBadge)<{
  hasBeenWatched: boolean;
  isBeingWatched: boolean;
}>`
  margin-left: 8px;

  color: white;

  background-color: ${({ hasBeenWatched, isBeingWatched }) => {
    if (isBeingWatched) {
      return '#72a3f4';
    }

    if (hasBeenWatched) {
      return '#76c78f';
    }

    return '#fea252';
  }};
`;

export const ReleaseDate = styled.span.attrs({
  className: 'movie__content__release-date',
})`
  font-size: 14px;
  line-height: 12px;
`;

export const Category = styled.span.attrs({
  className: 'movie__badges-container__category',
})`
  padding: 5px;
  margin-top: 4px;

  color: white;
  font-size: 11px;
  line-height: 10px;
  font-weight: 600;
  text-transform: uppercase;

  background-color: #cb8282;
  border-radius: 20px;

  &:not(:last-child) {
    margin-right: 4px;
  }
`;

export const ActionsContainer = styled.div.attrs({
  className: 'movie__actions-container',
})`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 85px;
`;

const Button = styled.div`
  display: flex;
  flex: 1;

  border-right-width: 1px;
  border-right-style: solid;
  border-right-color: #dae0e3;

  cursor: pointer;

  &:hover {
    transition-property: background-color;
    transition-duration: 0.3s;
  }

  > span {
    margin: auto;

    color: white;
    font-size: 14px;
    font-weight: 600;
    line-height: 12px;
  }
`;

export const UpdateButton = styled(Button).attrs({
  className: 'movie__actions-container__update-button',
})`
  background-color: #ffa252;
  border-top-right-radius: 20px;

  &:hover {
    background-color: ${darken(0.1, '#ffa252')};
  }
`;

export const DeleteButton = styled(Button).attrs({
  className: 'movie__actions-container__delete-button',
})`
  background-color: #e85d1f;
  border-bottom-right-radius: 20px;

  &:hover {
    background-color: ${darken(0.1, '#e85d1f')};
  }
`;
