// Dependencies
import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  justify-content: center;

  background-color: #ecf0f2;
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

export const MoviesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 400px);
  grid-gap: 10px;
  margin-top: 30px;
`;
