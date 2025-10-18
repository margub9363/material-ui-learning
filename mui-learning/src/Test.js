import React, { useState } from "react";
import {
  Button,
  Typography,
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

export const Test = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    subscribe: false,
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
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit}
      >
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

        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Subscribe to Newsleter"
            onChange={() => {
              setInputs((prevState) => ({
                ...prevState,
                subscribe: !inputs.subscribe,
              }));
            }}
          />
          <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
        </FormGroup>

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Test;
