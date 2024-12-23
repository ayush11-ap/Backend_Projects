import React, { useState } from "react";
import logo from "../Images/live-chat_welcome.png";
import {
  Backdrop,
  Button,
  CircularProgress,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // ? material ui
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };
  //! end

  const [isLoginMode, setIsLoginMode] = useState(true);
  const [data, setData] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState(""); // Unified status for login and signup
  const navigate = useNavigate();

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  //! Submit Handler
  const submitHandler = async () => {
    setLoading(true);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const url = isLoginMode
        ? "http://localhost:8080/user/login/"
        : "http://localhost:8080/user/register/";

      const response = await axios.post(url, data, config);

      console.log(isLoginMode ? "Login" : "Sign Up", response);

      setStatus({ msg: "Success", key: Math.random() });
      localStorage.setItem("userData", JSON.stringify(response));

      navigate("/app/welcome");
    } catch (error) {
      const errorMessage = isLoginMode
        ? "Invalid User name or Password"
        : error.response?.status === 405
        ? "User with this email ID already exists"
        : error.response?.status === 406
        ? "User name already taken"
        : "Error occurred";

      setStatus({ msg: errorMessage, key: Math.random() });
    }
    setLoading(false);
  };

  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="secondary" />
      </Backdrop>

      <div className="login-container lg:h-[90vh] lg:w-[90vw] lg:bg-[#f4f5f8] lg:rounded-3xl lg:flex lg:shadow-sky-100 shadow-xl">
        <div className="image-cont lg:flex-[0.4] lg:flex lg:justify-center lg:items-center">
          <img src={logo} alt="" />
        </div>
        <div className="login-box lg:flex-[0.6] lg:bg-white lg:rounded-3xl lg:m-3 lg:text-sky-400 lg:font-bold lg:flex lg:flex-col lg:justify-center lg:items-center lg:gap-5 lg:shadow-xl">
          <p className="login-text text-sky-400 lg:text-2xl">
            {isLoginMode ? "Login to your Account" : "Create New Account"}
          </p>

          {!isLoginMode && (
            <TextField
              onChange={changeHandler}
              label="Enter Username"
              id="outlined-start-adornment"
              sx={{ m: 1, width: "38ch" }}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                },
              }}
              name="name"
              onKeyDown={(event) => {
                if (event.code === "Enter") submitHandler();
              }}
            />
          )}
          <TextField
            onChange={changeHandler}
            id="outlined-basic"
            label="Enter Email"
            sx={{ m: 1, width: "38ch" }}
            variant="outlined"
            name="email"
            onKeyDown={(event) => {
              if (event.code === "Enter") submitHandler();
            }}
          />

          <FormControl sx={{ m: 1, width: "38ch" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              onChange={changeHandler}
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              name="password"
              onKeyDown={(event) => {
                if (event.code === "Enter") submitHandler();
              }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword
                        ? "hide the password"
                        : "display the password"
                    }
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    onMouseUp={handleMouseUpPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>

          {/* button */}
          <Button variant="outlined" onClick={submitHandler}>
            {isLoginMode ? "LOGIN" : "SIGN UP"}
          </Button>

          <p>
            {isLoginMode
              ? "Don't have an Account - "
              : "Already have an Account - "}
            <span
              className="cursor-pointer text-[#FF7D97]"
              onClick={() => setIsLoginMode(!isLoginMode)}
            >
              {isLoginMode ? "Sign Up" : "LogIn"}
            </span>
          </p>
          {/* {status && <Toaster key={status.key} message={status.msg} />} */}
        </div>
      </div>
    </>
  );
};

export default Login;
