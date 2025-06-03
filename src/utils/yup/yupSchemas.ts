import * as yup from 'yup';
import { AppErrors } from '../../common/constants/errors/appErrors';

export const LoginSchema = yup.object().shape({
  email: yup.string().email(AppErrors.InvalidEmail).required(AppErrors.RequiredField),
  password: yup.string().required(AppErrors.RequiredField),
});

export const RegisterSchema = yup.object().shape({
  name: yup.string().required(AppErrors.RequiredField),
  email: yup.string().email(AppErrors.InvalidEmail).required(AppErrors.RequiredField),
  password: yup.string().min(8, AppErrors.minLength).required(AppErrors.RequiredField),
  confirmPassword: yup
    .string()
    .min(8, AppErrors.minLength)
    .required(AppErrors.RequiredField)
    .oneOf([yup.ref('password')], AppErrors.PasswordDoNotMatch),
});

export const OrderFormSchema = yup.object().shape({
  email: yup.string().email(AppErrors.InvalidEmail).required(AppErrors.RequiredField),
  phone: yup
    .string()
    .matches(/^(\+\d{1,3}[- ]?)?\d{9,12}$/, 'Некорректный формат телефона')
    .required(AppErrors.RequiredField),
  deliveryMethod: yup.string().oneOf(['pickup', 'delivery']).required(AppErrors.RequiredField),
  paymentMethod: yup.string().oneOf(['cash', 'card']).required(AppErrors.RequiredField),
  comment: yup.string().optional(),
});
