import React from "react";
import logo from "../Images/live-chat_welcome.png";
import {
  Button,
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

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="login-container lg:h-[90vh] lg:w-[90vw] lg:bg-[#f4f5f8] lg:rounded-3xl lg:flex lg:shadow-sky-400">
      <div className="image-cont lg:flex-[0.4] lg:flex lg:justify-center lg:items-center">
        <img src={logo} alt="" />
      </div>
      <div className="login-box lg:flex-[0.6] lg:bg-white lg:rounded-3xl lg:m-3 lg:text-sky-400 lg:font-bold lg:flex lg:flex-col lg:justify-center lg:items-center lg:gap-5">
        <p className="text-sky-400 lg:text-2xl">Login To Your Account</p>

        {/* //& Input field for username */}
        <TextField
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
        />

        {/* //! Password */}
        <FormControl sx={{ m: 1, width: "38ch" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword ? "hide the password" : "display the password"
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
        <Button variant="outlined" href="user-chat">
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
