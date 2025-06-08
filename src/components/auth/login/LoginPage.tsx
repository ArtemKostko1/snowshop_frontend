import React from 'react';
import { TextField, Typography } from '@mui/material';
import { useLoginPageStyles } from './LoginPage.styles';
import Logo from '../../../common/assets/logo';
import { IPropsLogin } from '../../../common/types/auth/authTypes';
import { AppLoadingButton } from '../../_common/loading-button/AppLoadingButton.styles';

const LoginPage: React.FC<IPropsLogin> = (props: IPropsLogin): JSX.Element => {
  const { navigate, register, errors, loading } = props;
  const classes = useLoginPageStyles();

  return (
    <>
      <Logo className={classes.logo} />
      <TextField
        className={classes.textField}
        error={!!errors.email}
        size="small"
        fullWidth={true}
        margin="normal"
        label="Email"
        variant="outlined"
        placeholder="Введите ваш email"
        helperText={errors.email ? `${errors.email.message}` : ''}
        {...register('email')}
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
        helperText={errors.password ? `${errors.password.message}` : ''}
        {...register('password')}
      />
      <AppLoadingButton loading={loading} type="submit" fullWidth={true} variant="contained">
        {loading ? '' : 'Войти'}
      </AppLoadingButton>
      <Typography>
        У вас нет аккаунта?
        <span className={classes.incitingText} onClick={() => navigate('/register')}>
          Регистрация
        </span>
      </Typography>
    </>
  );
};

export default LoginPage;
