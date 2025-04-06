import React, { useState } from "react";
import { TextField, Typography } from "@mui/material";
import { useLoginPageStyles } from "./LoginPage.styles";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Logo from "../../../assets/logo/logo";
import { IPropsLogin } from "../../../common/types/auth/authTypes";
import AppLoadingButton from "../../AppLoadingButton/AppLoadingButton";

const Login: React.FC<IPropsLogin> = (props: IPropsLogin): JSX.Element => {
  const { navigate, setUserName, setPassword } = props;
  const classes = useLoginPageStyles();
  const [showPassword, setShowPassword] = useState<boolean>(false);

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
        //error={!!errors.email}
        size="small"
        fullWidth={true}
        margin="normal"
        label="Имя пользователя"
        variant="outlined"
        placeholder="Введите ваше имя пользователя"
        //helperText={errors.email ? `${errors.email.message}` : ""}
        //{...register("email")}
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
      <AppLoadingButton
        //loading={loading}
        type="submit"
        fullWidth={true}
        variant="contained"
      >
        Войти
      </AppLoadingButton>
      <Typography>
        У вас нет аккаунта?
        <span
          className={classes.incitingText}
          onClick={() => navigate("/register")}
        >
          Регистрация
        </span>
      </Typography>
    </>
  );
};

export default Login;
