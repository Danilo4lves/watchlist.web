// Dependencies
import styled, { css } from 'styled-components';

// Assets
import { addIcon } from '../assets/images';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  justify-content: center;

  background-color: #ecf0f2;
`;

export const SearchInputContainer = styled.div`
  display: flex;
`;

export const SearchInput = styled.input.attrs(props => ({
  type: 'search',
  placeholder: 'Procurar',
  ...props,
}))`
  width: 600px;
  height: 40px;
  padding-left: 20px;
  padding-right: 10px;

  color: #627179;
  font-size: 14px;
  line-height: 12px;
  font-weight: 600;

  border-width: 1px;
  border-style: solid;
  border-color: #dae0e3;
  border-radius: 20px;

  outline: none;

  &::placeholder {
    color: #aab5bb;
  }
`;

export const Button = styled.button<{ isDisabled?: boolean }>`
  height: 40px;
  padding: 4px 12px;

  color: #627179;
  font-size: 14px;
  line-height: 12px;
  font-weight: 600;

  border-width: 1px;
  border-style: solid;
  border-color: #dae0e3;
  border-radius: 20px;
  background-color: white;
  outline: none;

  cursor: pointer;

  &:first-child {
    margin-right: 8px;
  }

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      opacity: 0.5;

      pointer-events: none;
    `};
`;

export const AddButton = styled(Button)`
  display: flex;
  padding: 4px;
  width: 40px;

  margin-left: 8px;
  margin-right: 0;

  border-radius: 50%;
`;

export const AddIcon = styled.img.attrs({
  src: addIcon,
  height: 20,
  width: 20,
})`
  margin: auto;
`;

export const MoviesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 400px);
  grid-gap: 10px;
  margin-top: 30px;
`;
