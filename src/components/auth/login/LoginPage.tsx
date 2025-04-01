import React, { useState } from "react";
import {
  IconButton,
  TextField,
  Grid,
  InputAdornment,
  Box,
  Typography,
  Tooltip,
  Button,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store/store";
import { useStyles } from "./LoginPage.styles";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import appErrors from "../../../assets/constants/errors";
import { loginThunk } from "../../../store/thunks/auth/authThunk";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../../store/hooks/auth/useAuth";
import appToolltips from "../../../assets/constants/tooltips";
import Logo from "../../../assets/logo/logo";

const Login: React.FC = (): JSX.Element => {
  const classes = useStyles();
  const { isLoading } = useAuth();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [password, setPassword] = useState<string>("");
  const [userName, setUsername] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = (userName: string, password: string): boolean => {
    let errors: { [key: string]: string } = {};
    if (!userName) errors.userName = appErrors.fieldValidation.REQUIRED_FIELD;
    if (!password) errors.password = appErrors.fieldValidation.REQUIRED_FIELD;
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const clearError = (name: string): void => {
    const newErrors = { ...errors };
    delete newErrors[name];
    setErrors(newErrors);
  };

  const submit = async (): Promise<void> => {
    const userCredentials = {
      userName,
      password,
    };

    try {
      await dispatch(loginThunk(userCredentials));
      navigate("/");
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error(appErrors.authErrors.AUTH_ERROR);
      }
      console.error(appErrors.authErrors.AUTH_ERROR, error);
    }
  };

  return (
    <Grid container spacing={3} direction="column" justifyContent="center">
      <Grid item>
        <div className={classes.logo}>
          <Logo />
        </div>
      </Grid>
      <Grid item>
        <TextField
          className={classes.textField}
          id="userName"
          label="Логин"
          variant="outlined"
          size="small"
          fullWidth
          autoComplete="new-userName"
          error={!!errors["userName"]}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              if (validate(userName, password)) {
                event.preventDefault();
                submit();
              }
            }
          }}
          value={userName}
          onChange={(e) => {
            "username" in errors && clearError("userName");
            setUsername(e.target.value);
          }}
        />
        <Box sx={{ height: "6px !important" }}>
          {errors["userName"] && (
            <Typography
              variant="caption"
              color="error"
              className={classes.errorMessage}
            >
              {errors["userName"]}
            </Typography>
          )}
        </Box>
      </Grid>
      <Grid item>
        <TextField
          className={classes.textField}
          id="password"
          type={showPassword ? "text" : "password"}
          label="Пароль"
          variant="outlined"
          size="small"
          fullWidth
          autoComplete="new-password"
          error={!!errors["password"]}
          value={password}
          InputProps={{
            endAdornment: (
              <InputAdornment
                position="end"
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
              >
                <IconButton edge="end" size="small">
                  {showPassword ? (
                    <Tooltip title={appToolltips.systemToolltips.HIDE_PASSWORD}>
                      <VisibilityIcon />
                    </Tooltip>
                  ) : (
                    <Tooltip title={appToolltips.systemToolltips.SHOW_PASSWORD}>
                      <VisibilityOffIcon />
                    </Tooltip>
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              if (validate(userName, password)) {
                event.preventDefault();
                submit();
              }
            }
          }}
          onChange={(e) => {
            "password" in errors && clearError("password");
            setPassword(e.target.value);
          }}
        />
        <Box sx={{ height: "6px !important" }}>
          {errors["password"] && (
            <Typography
              variant="caption"
              color="error"
              className={classes.errorMessage}
            >
              {errors["password"]}
            </Typography>
          )}
        </Box>
      </Grid>
      <Grid item>
        <Button
          className={classes.submitButton}
          loading={isLoading}
          variant="contained"
          onClick={(event: any) => {
            if (validate(userName, password)) {
              event.preventDefault();
              submit();
            }
          }}
        >
          <span>ВОЙТИ</span>
        </Button>
      </Grid>
    </Grid>
  );
};

export default Login;
