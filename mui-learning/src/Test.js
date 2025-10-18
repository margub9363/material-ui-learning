import React, { useState } from "react";
import { Button, Typography, TextField } from "@mui/material";

export const Test = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          name="name"
          value={inputs.name}
          onChange={handleChange}
          sx={{ margin: 3 }}
          type="text"
          placeholder="Name"
          variant="outlined"
        />
        <TextField
          name="email"
          value={inputs.email}
          sx={{ margin: 3 }}
          type="email"
          placeholder="Email"
          variant="standard"
        />
        <TextField
          name="password"
          value={inputs.password}
          sx={{ margin: 3 }}
          type="password"
          placeholder="Password"
          variant="filled"
        />
        <Button type="submit">Submit</Button>
      </form>
      <Typography>Hi {inputs.name} </Typography>
    </div>
  );
};

export default Test;
