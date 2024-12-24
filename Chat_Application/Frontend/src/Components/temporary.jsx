import React, { useState } from "react";
import logo from "../Images/live-chat_512px.png";
import { Backdrop, Button, CircularProgress, TextField } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Toaster from "./Toaster";

function Login() {
  const [isLoginMode, setIsLoginMode] = useState(true); // Toggle between Login and SignUp
  const [data, setData] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState(""); // Unified status for login and signup
  const navigate = useNavigate();

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

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
      <div className="login-container">
        <div className="image-container">
          <img src={logo} alt="Logo" className="welcome-logo" />
        </div>
        <div className="login-box">
          <p className="login-text">
            {isLoginMode ? "Login to your Account" : "Create your Account"}
          </p>
          {!isLoginMode && (
            <TextField
              onChange={changeHandler}
              id="standard-basic"
              label="Enter User Name"
              variant="outlined"
              color="secondary"
              name="name"
              onKeyDown={(event) => {
                if (event.code === "Enter") submitHandler();
              }}
            />
          )}
          <TextField
            onChange={changeHandler}
            id="standard-basic"
            label="Enter Email Address"
            variant="outlined"
            color="secondary"
            name="email"
            onKeyDown={(event) => {
              if (event.code === "Enter") submitHandler();
            }}
          />
          <TextField
            onChange={changeHandler}
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            color="secondary"
            name="password"
            onKeyDown={(event) => {
              if (event.code === "Enter") submitHandler();
            }}
          />
          <Button variant="outlined" color="secondary" onClick={submitHandler}>
            {isLoginMode ? "Login" : "Sign Up"}
          </Button>
          <p>
            {isLoginMode
              ? "Don't have an account? "
              : "Already have an account? "}
            <span
              className="hyper"
              onClick={() => setIsLoginMode(!isLoginMode)}
            >
              {isLoginMode ? "Sign Up" : "Log in"}
            </span>
          </p>
          {status && <Toaster key={status.key} message={status.msg} />}
        </div>
      </div>
    </>
  );
}

export default Login;
