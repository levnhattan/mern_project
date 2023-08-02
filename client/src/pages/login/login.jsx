import React, { useState } from "react";
import {
  TextField,
  Typography,
  Box,
  InputAdornment,
  OutlinedInput,
  IconButton,
  InputLabel,
  FormControl,
} from "@mui/material";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import bg from "../../assets/img/3409297.jpg";
import "./style.css";

const Login = () => {
  // click icon passwrod
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleSubmit = () => {};

  return (
    <div
      className="container p-10"
      style={{
        backgroundColor: "#808e9b",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Box
        className="span-center content-center"
        sx={{
          height: "90%",
          width: "70%",
          marginLeft: "10rem",
          backgroundImage: `url(${bg})`,
          borderRadius: "10px",
          color: "white",
        }}
      >
        <div className="p-5 relative">
          <Typography
            className=" absolute left-16 "
            variant="caption"
            display="block"
            gutterBottom
          >
            Mern Social App
          </Typography>
          <span className=" inline-block w-4 h-4 absolute left-10 rounded-full bg-blue-500"></span>
        </div>
        <form
          className="p-10 border-white w-9/12 "
          autoComplete="off"
          noValidate
          onSubmit={handleSubmit}
        >
          <p className="font-mono font-bold text-3xl ">Create new account</p>
          <p className="font-sans font-light text-sm mt-4 mb-5 text-inherit">
            Already a member?{" "}
            <span className="text-blue-500 font-bold cursor-pointer">
              Login
            </span>
          </p>
          <div className="flex flex-row w-full">
            <div className="flex items-center bg-slate-500 mr-14 rounded-md rounded-b-lg">
              <TextField
                size="small"
                id="outlined-basic"
                label="First Name"
                variant="outlined"
              />
              <AccountBalanceWalletIcon
                sx={{ color: "action.active", mr: 1, my: 0.5 }}
              />
            </div>
            <div className="flex items-center bg-slate-500  rounded-md rounded-b-lg ">
              <TextField
                size="small"
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
              />
              <AccountBalanceWalletIcon
                sx={{ color: "action.active", mr: 1, my: 0.5 }}
              />
            </div>
          </div>
          <FormControl
            sx={{ width: "100%", mt: "1rem" }}
            variant="outlined"
            size="small"
            className="bg-slate-500  rounded-md rounded-b-lg "
          >
            <InputLabel htmlFor="outlined-adornment-password">Email</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              endAdornment={
                <InputAdornment position="end">
                  <MailOutlineIcon
                    aria-label="toggle Email visibility"
                    edge="end"
                  ></MailOutlineIcon>
                </InputAdornment>
              }
              label="Email"
            />
          </FormControl>
          <FormControl
            sx={{ width: "100%", mt: "1rem" }}
            variant="outlined"
            size="small"
            className="bg-slate-500 mr-10 rounded-md rounded-b-lg "
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <div className="flex items-center justify-center">
            <button class="px-5 py-3 mt-4 bg-blue-500 text-white rounded-3xl border border-blue-700 shadow-lg">
              Create account
            </button>
          </div>
        </form>
      </Box>
    </div>
  );
};

export default Login;
