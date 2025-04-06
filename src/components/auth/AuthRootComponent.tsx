import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LoginPage from "./login/LoginPage";
import RegisterPage from "./register/RegisterPage";
import { Box } from "@mui/material";
import { AppErrors } from "../../common/constants/errors/appErrors";
import { useForm } from "react-hook-form";
//import { yupResolver } from '@hookform/resolvers/yup'
//import { LoginSchema, RegisterSchema } from '../../utils/yup'
import { useStyles } from "./AuthRootComponent.styles";
import { loginThunk } from "../../store/thunks/auth/authThunk";
import { useAppDispatch, useAppSelector } from "../../store/hooks/app";

const AuthRootComponent: React.FC = (): JSX.Element => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const classes = useStyles();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleSubmitForm = async (data: any) => {
    if (location.pathname === "/login") {
      try {
        await dispatch(loginThunk(data));
        navigate("/");
      } catch (error) {
        return error;
      }
    } else {
      if (data.password === data.confirmPassword) {
        try {
          const userData = {
            name: data.name,
            email: data.email,
            password: data.password,
          };
          //await dispatch(registerThunk(userData))
          navigate("/");
        } catch (e) {
          console.log(e);
          return e;
        }
      } else {
        throw new Error(AppErrors.PasswordDoNotMatch);
      }
    }
  };

  return (
    <div className={classes.root}>
      <form className={classes.form} onSubmit={handleSubmit(handleSubmitForm)}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          {location.pathname === "/login" ? (
            <LoginPage
              navigate={navigate}
              register={register}
              errors={errors}
              //loading={loading}
            />
          ) : location.pathname === "/register" ? (
            <RegisterPage
              navigate={navigate}
              register={register}
              errors={errors}
              //loading={loading}
            />
          ) : null}
        </Box>
      </form>
    </div>
  );
};

export default AuthRootComponent;
