// Dependencies
import styled from 'styled-components';

// Styled components
import { SearchInput } from '../../styles';

// Assets
import { arrowIcon } from '../../../assets/images';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  padding: 20px;

  background-color: #f6f8fa;
  border-width: 1px;
  border-style: solid;
  border-color: #dae0e3;
  border-radius: 20px;
`;

export const InputsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4px;

  color: #627179;
  text-align: center;

  > span {
    margin-bottom: 4px;

    font-size: 14px;
    line-height: 12px;
    font-weight: 700;
  }

  > p {
    font-size: 12px;
    margin-top: 4px;
    margin-bottom: 0;
  }
`;

export const SelectInputContainer = styled.div`
  position: relative;

  &:after {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%) rotate(-90deg);

    width: 15px;
    height: 15px;

    background-image: url(${arrowIcon});
    background-size: cover;
    background-repeat: no-repeat;

    transition-property: transform;
    transition-duration: 0.3s;

    content: '';
  }

  &:active {
    &:after {
      transform: translateY(-50%) rotate(90deg);
    }
  }
`;

export const SelectInput = styled.select`
  width: 100%;
  height: 40px;
  padding-left: 20px;
  padding-right: 20px;

  color: #627179;
  font-size: 14px;
  line-height: 12px;
  font-weight: 600;

  background-color: white;
  border-width: 1px;
  border-style: solid;
  border-color: #dae0e3;
  border-radius: 20px;

  outline: none;
  appearance: none;

  > option {
    color: #627179;
    font-size: 14px;
    line-height: 12px;
    font-weight: 500;
  }
`;

export const Input = styled(SearchInput).attrs({
  type: 'text',
  placeholder: '',
})`
  width: 100%;
  margin-bottom: 0;
`;

export const DateInput = styled(SearchInput).attrs({
  type: 'date',
})`
  width: 100%;
  margin-bottom: 0;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
