// Dependencies
import React from 'react';

// Styled components
import { Button } from '../../styles';

import {
  Container,
  InputsContainer,
  InputContainer,
  SelectInputContainer,
  SelectInput,
  Input,
  DateInput,
  ButtonsContainer,
} from './styles';

// Types
import { AddToWatchListFormPresentationalPropsInterface } from './types';

function AddToWatchListFormPresentational(
  props: AddToWatchListFormPresentationalPropsInterface,
) {
  const {
    closeForm,

    register,
    handleSubmit,
    isValid,

    onSubmit,
  } = props;

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <InputsContainer>
        <InputContainer>
          <span>Tipo</span>

          <SelectInputContainer>
            <SelectInput
              ref={register({
                required: 'Selecione o tipo.',
              })}
              name="type"
            >
              <option>Filme</option>
              <option>Série</option>
            </SelectInput>
          </SelectInputContainer>
        </InputContainer>

        <InputContainer>
          <span>Situação</span>

          <SelectInputContainer>
            <SelectInput
              ref={register({
                required: true,
              })}
              name="situation"
            >
              <option>Assistindo</option>
              <option>Assistido</option>
              <option>NÃO assistido</option>
            </SelectInput>
          </SelectInputContainer>
        </InputContainer>

        <InputContainer>
          <span>Título</span>

          <Input
            ref={register({
              required: true,
            })}
            name="title"
          />
        </InputContainer>

        <InputContainer>
          <span>Sinópse</span>

          <Input
            ref={register({
              required: true,
            })}
            name="synopsis"
          />
        </InputContainer>

        <InputContainer>
          <span>Data de lançamento</span>

          <DateInput
            ref={register({
              required: true,
            })}
            name="releaseDate"
          />
        </InputContainer>

        <InputContainer>
          <span>
            Categorias (<small>separe com vírgula</small>)
          </span>

          <Input
            ref={register({
              required: true,
            })}
            name="categories"
          />
        </InputContainer>
      </InputsContainer>

      <ButtonsContainer>
        <Button onClick={closeForm}>Cancelar</Button>

        <Button isDisabled={!isValid}>Criar</Button>
      </ButtonsContainer>
    </Container>
  );
}

export default AddToWatchListFormPresentational;
