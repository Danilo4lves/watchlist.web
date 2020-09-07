// Types
import {
  FieldValues,
  FieldElement,
  ValidationRules,
  Ref,
  SubmitHandler,
  SubmitErrorHandler,
} from 'react-hook-form/dist/types';

type Option = { value: number; label: string };

type FormValues = {
  type: Option;
  situation: Option;
  title: string;
  synopsis: string;
  releaseDate: string;
  categories: string;
};

export interface AddToWatchListFormPropsInterface {
  register<TFieldElement extends FieldElement<FormValues>>(
    rules?: ValidationRules,
  ): (ref: (TFieldElement & Ref) | null) => void;
  handleSubmit: <TSubmitFieldValues extends FieldValues = FormValues>(
    onValid: SubmitHandler<TSubmitFieldValues>,
    onInvalid?: SubmitErrorHandler<FormValues>,
  ) => (e?: React.BaseSyntheticEvent) => Promise<void>;
  isValid: boolean;
  onSubmit(values: FormValues): void;
}
