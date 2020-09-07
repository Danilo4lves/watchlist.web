// Dependencies
import React from 'react';
import { useForm } from 'react-hook-form';

// Presentational
import AddToWatchListFormPresentational from './presentational';

function AddToWatchListForm() {
  const { register, formState, handleSubmit } = useForm();
  const { isValid } = formState;

  const onSubmit = React.useCallback(values => {
    console.log('values', values);
  }, []);

  return React.createElement(AddToWatchListFormPresentational, {
    register,
    handleSubmit,
    isValid,

    onSubmit,
  });
}

export default AddToWatchListForm;
