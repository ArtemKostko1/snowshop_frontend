import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import LoginPage from './login/LoginPage';
import RegisterPage from './register/RegisterPage';
import { Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginSchema, RegisterSchema } from '../../utils/yup/yupSchemas';
import { useStyles } from './AuthRootComponent.styles';
import { loginThunk, registerThunk } from '../../store/thunks/auth/authThunk';
import { useAppDispatch, useAppSelector } from '../../store/hooks/app';
import { ILoginForm, IRegisterForm } from '../../common/types/auth/authTypes';

const AuthRootComponent: React.FC = (): JSX.Element => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const loading = useAppSelector((state) => state.auth.isLoading);
  const isLogin = location.pathname === '/login';
  const isRegister = location.pathname === '/register';
  const classes = useStyles();

  const loginForm = useForm<ILoginForm>({
    resolver: yupResolver(LoginSchema),
  });

  const registerForm = useForm<IRegisterForm>({
    resolver: yupResolver(RegisterSchema),
  });

  const handleLoginSubmit: SubmitHandler<ILoginForm> = async (data) => {
    try {
      await dispatch(loginThunk(data));
      const token = sessionStorage.getItem('token');
      const userRole = sessionStorage.getItem('role')?.toUpperCase();
      if (token) {
        if (userRole === 'ADMIN') {
          navigate('/admin/products');
        } else {
          navigate('/');
        }
      }
    } catch (error) {
      return error;
    }
  };

  const handleRegisterSubmit: SubmitHandler<IRegisterForm> = async (data) => {
    try {
      const userData = {
        name: data.name,
        email: data.email,
        password: data.password,
      };

      await dispatch(registerThunk(userData));
      navigate('/');
    } catch (e) {
      return e;
    }
  };

  return (
    <div className={classes.root} style={{ position: 'relative' }}>
      <IconButton
        onClick={isRegister ? () => navigate(-2) : () => navigate(-1)}
        sx={{
          position: 'absolute',
          top: 16,
          right: 16,
          zIndex: 10,
          color: '#888',
        }}
        aria-label="Закрыть"
      >
        <CloseIcon />
      </IconButton>
      <Box
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        {isLogin ? (
          <form className={classes.form} onSubmit={loginForm.handleSubmit(handleLoginSubmit)}>
            <LoginPage
              navigate={navigate}
              register={loginForm.register}
              errors={loginForm.formState.errors}
              loading={loading}
            />
          </form>
        ) : (
          <form className={classes.form} onSubmit={registerForm.handleSubmit(handleRegisterSubmit)}>
            <RegisterPage
              navigate={navigate}
              register={registerForm.register}
              errors={registerForm.formState.errors}
              loading={loading}
            />
          </form>
        )}
      </Box>
    </div>
  );
};

export default AuthRootComponent;
