import React from "react";
import { IPropsRegister } from "../../../common/types/auth/authTypes";
import Logo from "../../../assets/logo/logo";
import { TextField, Typography } from "@mui/material";
import { AppLoadingButton } from "../../_common/loading-button/AppLoadingButton.styles";
import { useRegisterPageStyles } from "./RegisterPage.styles";

const RegisterPage: React.FC<IPropsRegister> = (
  props: IPropsRegister
): JSX.Element => {
  const { navigate, register, errors, loading } = props;
  const classes = useRegisterPageStyles();
  return (
    <>
      <Logo className={classes.logo} />
      <TextField
        className={classes.textField}
        error={!!errors.name}
        size="small"
        fullWidth={true}
        margin="normal"
        label="Имя"
        variant="outlined"
        placeholder="Введите ваше имя"
        helperText={errors.name ? `${errors.name.message}` : ""}
        {...register("name")}
      />
      <TextField
        className={classes.textField}
        error={!!errors.email}
        size="small"
        fullWidth={true}
        margin="normal"
        label="Email"
        variant="outlined"
        placeholder="Введите ваш email"
        helperText={errors.email ? `${errors.email.message}` : ""}
        {...register("email")}
      />
      <TextField
        className={classes.textField}
        error={!!errors.password}
        size="small"
        type="password"
        fullWidth={true}
        margin="normal"
        label="Пароль"
        variant="outlined"
        placeholder="Введите ваш пароль"
        helperText={errors.password ? `${errors.password.message}` : ""}
        {...register("password")}
      />
      <TextField
        className={classes.textField}
        error={!!errors.confirmPassword}
        size="small"
        type="password"
        fullWidth={true}
        margin="normal"
        label="Подтверждение пароля"
        variant="outlined"
        placeholder="Повторите ваш пароль"
        helperText={
          errors.confirmPassword ? `${errors.confirmPassword.message}` : ""
        }
        {...register("confirmPassword")}
      />
      <AppLoadingButton
        loading={loading}
        type="submit"
        fullWidth={true}
        variant="contained"
      >
        ЗАРЕГИСТРИРОВАТЬСЯ
      </AppLoadingButton>
      <Typography>
        У вас есть аккаунт?&nbsp;
        <span
          className={classes.incitingText}
          onClick={() => navigate("/login")}
        >
          Авторизация
        </span>
      </Typography>
    </>
  );
};

export default RegisterPage;
