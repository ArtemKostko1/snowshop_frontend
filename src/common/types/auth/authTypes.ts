import { FieldValues, UseFormRegister, FieldErrors } from "react-hook-form";

export interface IPropsLogin<
  TFieldValues extends FieldValues = FieldValues,
  TabContext = any
> {
  register: UseFormRegister<TFieldValues>;
  navigate: (to: string) => void;
  errors: FieldErrors<TFieldValues>;
}

export interface IPropsRegister<
  TFieldValues extends FieldValues = FieldValues,
  TabContext = any
> {
  register: UseFormRegister<TFieldValues>;
  navigate: (to: string) => void;
  errors: FieldErrors<TFieldValues>;
}
