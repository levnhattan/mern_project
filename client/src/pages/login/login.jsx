import React from "react";
import bgLogin from "../../assets/img/Mountains_landscape.jpg";
import { TextField, Button } from '@mui/material';

const login = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover"

    >
      <div className="bg-white p-10 rounded-md shadow-md">
        <TextField
          fullWidth
          label="First Name"
          variant="outlined"
          className="mb-4"
        />
        <TextField
          fullWidth
          label="Last Name"
          variant="outlined"
          className="mb-4"
        />
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          className="mb-4"
        />
        <TextField
          fullWidth
          label="Password"
          variant="outlined"
          type="password"
          className="mb-4"
        />
        <Button variant="contained" fullWidth color="primary" className="mb-2">
          Login
        </Button>
        <Button
          variant="contained"
          fullWidth
          className="bg-blue-600 text-white"
        >
          Sign in with MUI
        </Button>
      </div>
    </div>
  );
};

export default login;
