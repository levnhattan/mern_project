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
  Grid,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import bgImg from "../../assets/img/images2.png";
import bgImg2 from "../../assets/img/images.png";

import "./style.css";

const Register = () => {
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
          backgroundColor: `white`,
          borderRadius: "10px",
          flexGrow: 1,
        }}
      >
        <Grid container>
          <Grid item xs={6} >
            <div className="p-5  relative text-black">
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
              className="p-10 border-white "
              autoComplete="off"
              noValidate
              onSubmit={handleSubmit}
            >
              <p className="font-mono font-bold text-2xl text-black">
                Welcome back
              </p>
              <FormControl
                sx={{ width: "100%", mt: "1rem" }}
                variant="outlined"
                size="small"
                className="bg-slate-500  rounded-md rounded-b-lg "
              >
                <InputLabel htmlFor="outlined-adornment-password">
                  Email
                </InputLabel>
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
              <Typography variant="subtitle1" gutterBottom >Forget password?</Typography>
              <div className="">
                <button class="w-full h-full p-2 mt-4 bg-blue-500 text-white rounded-3xl border border-blue-700 shadow-lg">
                  Login
                </button>
              </div>
            </form>
          </Grid>
          <Grid item xs={6}>
            <div className="w-full h-full overflow-hidden" >
              <img src={bgImg} className="w-full h-full object-cover"/>
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Register;
