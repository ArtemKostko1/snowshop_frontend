import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LoginPage from "./login/LoginPage";
import RegisterPage from "./register/RegisterPage";
import { Box } from "@mui/material";
//import { useAppDispatch, useAppSelector } from '../../utils/hook'
//import { AppErrors } from '../../common/errors'
import { useForm } from "react-hook-form";
//import { yupResolver } from '@hookform/resolvers/yup'
//import { LoginSchema, RegisterSchema } from '../../utils/yup'
import { useStyles } from "./AuthRootComponent.styles";
import { loginThunk } from "../../store/thunks/auth/authThunk";
import { useAppDispatch } from "../../store/hooks/app";

const AuthRootComponent: React.FC = (): JSX.Element => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const classes = useStyles();

  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  // const {
  //     register,
  //     formState: { errors },
  //     handleSubmit,
  // } = useForm({
  //     resolver: yupResolver(
  //         location.pathname === '/login' ? LoginSchema : RegisterSchema,
  //     ),
  // })
  // const loading = useAppSelector((state) => state.auth.isLoading)

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
    <div className={classes.root}>
      <form noValidate className={classes.form}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          {location.pathname === "/login" ? (
            <LoginPage
              setUserName={setUserName}
              setPassword={setPassword}
              navigate={navigate}
              //register={register}
              //errors={errors}
              //loading={loading}
            />
          ) : location.pathname === "/register" ? (
            <RegisterPage
              setName={setName}
              setUserName={setUserName}
              setPassword={setPassword}
              setRepeatPassword={setRepeatPassword}
              navigate={navigate}
              //register={register}
              //errors={errors}
              //loading={loading}
            />
          ) : null}
        </Box>
      </form>
    </div>
  );
};

export default AuthRootComponent;
