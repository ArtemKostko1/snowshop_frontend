import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import LoginPage from "./login/LoginPage";
import RegisterPage from "./register/RegisterPage";
import { Box } from "@mui/material";
//import { useAppDispatch, useAppSelector } from '../../utils/hook'
//import { AppErrors } from '../../common/errors'
//import { useForm } from 'react-hook-form'
//import { yupResolver } from '@hookform/resolvers/yup'
//import { LoginSchema, RegisterSchema } from '../../utils/yup'
import { useStyles } from "./AuthRootPage.styles";
import { loginThunk } from "../../store/thunks/auth/authThunk";

const AuthRootPage: React.FC = (): JSX.Element => {
  const location = useLocation();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const classes = useStyles();
  // const {
  //     register,
  //     formState: { errors },
  //     handleSubmit,
  // } = useForm({
  //     resolver: yupResolver(
  //         location.pathname === '/login' ? LoginSchema : RegisterSchema,
  //     ),
  // })
  //const loading = useAppSelector((state) => state.auth.isLoading)

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
            firstName: data.name,
            username: data.username,
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
        //throw new Error(AppErrors.PasswordDoNotMatch)
      }
    }
  };

  return (
    <Box className={classes.root}>
      <div className={classes.loginForm}>
        <form noValidate className={classes.form}>
          {location.pathname === "/login" ? (
            <LoginPage
              //navigate={navigate}
              //register={register}
              //errors={errors}
              //loading={loading}
            />
          ) : location.pathname === "/register" ? (
            <RegisterPage
              //navigate={navigate}
              //register={register}
              //errors={errors}
              //loading={loading}
            />
          ) : null}
        </form>
      </div>
    </Box>
  );
};

export default AuthRootPage;
