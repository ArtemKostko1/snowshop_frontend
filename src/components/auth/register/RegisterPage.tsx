import React from "react";
import { IPropsRegister } from "../../../common/types/auth/authTypes";
import Logo from "../../../assets/logo/logo";
import { TextField, Typography } from "@mui/material";
import AppLoadingButton from "../../AppLoadingButton/AppLoadingButton";
import { useRegisterPageStyles } from "./RegisterPage.styles";

const RegisterPage: React.FC<IPropsRegister> = (
  props: IPropsRegister
): JSX.Element => {
  const { navigate, setName, setUserName, setPassword, setRepeatPassword } =
    props;
  const classes = useRegisterPageStyles();
  return (
    <>
      <Logo className={classes.logo} />
      {/* <Typography
        variant="h1"
        textAlign="center"
        fontSize={32}
        color="#393e46"
        fontWeight="bold"
      >
        АВТОРИЗАЦИЯ
      </Typography> */}
      <TextField
        className={classes.textField}
        //error={!!errors.name}
        size="small"
        fullWidth={true}
        margin="normal"
        label="Имя"
        variant="outlined"
        placeholder="Введите ваше имя"
        //helperText={errors.name ? `${errors.name.message}` : ""}
        //{...register("name")}
      />
      <TextField
        className={classes.textField}
        //error={!!errors.userName}
        size="small"
        fullWidth={true}
        margin="normal"
        label="Имя пользователя"
        variant="outlined"
        placeholder="Введите ваше имя пользователя"
        //helperText={errors.userName ? `${errors.userName.message}` : ""}
        //{...register("userName")}
      />
      <TextField
        className={classes.textField}
        //error={!!errors.password}
        size="small"
        type="password"
        fullWidth={true}
        margin="normal"
        label="Пароль"
        variant="outlined"
        placeholder="Введите ваш пароль"
        //helperText={errors.password ? `${errors.password.message}` : ""}
        //{...register("password")}
      />
      <TextField
        className={classes.textField}
        //error={!!errors.confirmPassword}
        size="small"
        fullWidth={true}
        margin="normal"
        label="Подтверждение пароля"
        variant="outlined"
        placeholder="Повторите ваш пароль"
        //helperText={errors.confirmPassword ? `${errors.confirmPassword.message}` : ""}
        //{...register("confirmPassword")}
      />
      <AppLoadingButton
        //loading={loading}
        type="submit"
        fullWidth={true}
        variant="contained"
      >
        Войти
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
