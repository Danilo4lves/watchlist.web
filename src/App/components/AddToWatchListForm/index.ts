// Dependencies
import React from 'react';
import { useForm } from 'react-hook-form';

// Presentational
import AddToWatchListFormPresentational from './presentational';

// Types
import { AddToWatchListFormPropsInterface } from './types';

function AddToWatchListForm(props: AddToWatchListFormPropsInterface) {
  const { closeForm } = props;

  const { register, formState, handleSubmit } = useForm();
  const { isValid } = formState;

  const onSubmit = React.useCallback(values => {
    console.log('values', values);
  }, []);

  return React.createElement(AddToWatchListFormPresentational, {
    closeForm,

    register,
    handleSubmit,
    isValid,

    onSubmit,
  });
}

export default AddToWatchListForm;
