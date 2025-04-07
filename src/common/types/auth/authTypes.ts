import { FieldErrors, UseFormRegister } from "react-hook-form";

export interface IPropsLogin{
  navigate: (to: string) => void;
  register: UseFormRegister<ILoginForm>;
  errors: FieldErrors<ILoginForm>;
  loading: boolean;
}

export interface IPropsRegister{
  navigate: (to: string) => void;
  register: UseFormRegister<IRegisterForm>;
  errors: FieldErrors<IRegisterForm>;
  loading: boolean;
}

export interface ILoginForm {
  email: string;
  password: string;
}

export interface IRegisterData {
  name: string;
  email: string;
  password: string;
}

export interface IRegisterForm extends IRegisterData {
  confirmPassword: string;
}


