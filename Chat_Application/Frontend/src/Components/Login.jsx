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
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // ? material ui password field code
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };
  //! end

  const [showlogin, setShowLogin] = useState(false);
  const [data, setData] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const [logInStatus, setLogInStatus] = React.useState("");
  const [signInStatus, setSignInStatus] = React.useState("");

  const navigate = useNavigate();

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  //!login
  const loginHandler = async (e) => {
    setLoading(true);
    console.log(data);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const response = await axios.post(
        "http://localhost:8080/user/login/",
        data,
        config
      );
      console.log("Login : ", response);
      setLogInStatus({ msg: "Success", key: Math.random() });
      setLoading(false);
      localStorage.setItem("userData", JSON.stringify(response));
      navigate("/app/welcome");
    } catch (error) {
      setLogInStatus({
        msg: "Invalid User name or Password",
        key: Math.random(),
      });
    }
    setLoading(false);
  };

  const signUpHandler = async () => {
    setLoading(true);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const response = await axios.post(
        "http://localhost:8080/user/register/",
        data,
        config
      );
      console.log(response);
      setSignInStatus({ msg: "Success", key: Math.random() });
      navigate("/app/welcome");
      localStorage.setItem("userData", JSON.stringify(response));
      setLoading(false);
    } catch (error) {
      console.log(error);
      if (error.response.status === 405) {
        setLogInStatus({
          msg: "User with this email ID already Exists",
          key: Math.random(),
        });
      }
      if (error.response.status === 406) {
        setLogInStatus({
          msg: "User Name already Taken, Please take another one",
          key: Math.random(),
        });
      }
      setLoading(false);
    }
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

        {showlogin && (
          <div className="login-box lg:flex-[0.6] lg:bg-white lg:rounded-3xl lg:m-3 lg:text-sky-400 lg:font-bold lg:flex lg:flex-col lg:justify-center lg:items-center lg:gap-5 lg:shadow-xl">
            <p className="login-text text-sky-400 lg:text-2xl">
              Login to your Account
            </p>

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
                if (event.code == "Enter") {
                  loginHandler();
                }
              }}
            />

            {/* <TextField
              onChange={changeHandler}
              id="outlined-basic"
              label="Enter Email"
              sx={{ m: 1, width: "38ch" }}
              variant="outlined"
              name="email"
              onKeyDown={(event) => {
                if (event.code === "Enter") submitHandler();
              }}
            /> */}

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
                  if (event.code == "Enter") {
                    loginHandler();
                  }
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
            <Button variant="outlined" onClick={loginHandler}>
              LOGIN
            </Button>

            <p>
              Don't have an Account -
              <span
                className="cursor-pointer text-[#FF7D97]"
                onClick={() => setShowLogin(false)}
              >
                Sign Up
              </span>
            </p>
            {/* {logInStatus ? (
              <Toaster key={logInStatus.key} message={logInStatus.msg} />
            ) : null} */}
          </div>
        )}
        {!showlogin && (
          <div className="login-box lg:flex-[0.6] lg:bg-white lg:rounded-3xl lg:m-3 lg:text-sky-400 lg:font-bold lg:flex lg:flex-col lg:justify-center lg:items-center lg:gap-5 lg:shadow-xl">
            <p className="login-text text-sky-400 lg:text-2xl">
              Login to your Account
            </p>

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
                if (event.code == "Enter") {
                  signUpHandler();
                }
              }}
            />

            <TextField
              onChange={changeHandler}
              id="outlined-basic"
              label="Enter Email"
              sx={{ m: 1, width: "38ch" }}
              variant="outlined"
              name="email"
              onKeyDown={(event) => {
                if (event.code == "Enter") {
                  signUpHandler();
                }
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
                  if (event.code == "Enter") {
                    signUpHandler();
                  }
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
            <Button variant="outlined" onClick={signUpHandler}>
              SIGN UP
            </Button>

            <p>
              Already have an Account -
              <span
                className="cursor-pointer text-[#FF7D97]"
                onClick={() => setShowLogin(false)}
              >
                Login
              </span>
            </p>
            {/* {signInStatus ? (
            <Toaster key={logInStatus.key} message={logInStatus.msg} />
          ) : null} */}
          </div>
        )}
      </div>
    </>
  );
};

export default Login;
