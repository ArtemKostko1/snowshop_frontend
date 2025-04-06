import * as yup from 'yup'
import {AppErrors} from "../../common/constants/errors/appErrors";

export const LoginSchema = yup.object().shape({
    email: yup.string()
        .email(AppErrors.InvalidEmail)
        .required(AppErrors.RequiredField),
    password: yup.string()
        .min(8, AppErrors.minLength)
        .required(AppErrors.RequiredField)
        .matches(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!@#$%&?]{6,20}$/, AppErrors.InvalidPassword),
})

export const RegisterSchema = yup.object().shape({
	name: yup.string().required(AppErrors.RequiredField),
    email: yup.string()
        .email(AppErrors.InvalidEmail)
        .required(AppErrors.RequiredField),
    password: yup.string()
        .min(8, AppErrors.minLength)
        .required(AppErrors.RequiredField)
        .matches(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!@#$%&?]{6,20}$/, AppErrors.InvalidPassword),
    confirmPassword: yup.string()
        .min(8, AppErrors.minLength)
        .required(AppErrors.RequiredField)
        .matches(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!@#$%&?]{6,20}$/, AppErrors.InvalidPassword),
})