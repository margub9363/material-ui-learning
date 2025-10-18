import React, { useState } from "react";
import { Button, Typography, TextField } from "@mui/material";

export const Test = () => {
  const [name, setName] = useState("");
  return (
    <div>
      <TextField
        value={name}
        onChange={(e) => setName(e.target.value + "-")}
        sx={{ margin: 3 }}
        type="text"
        placeholder="Name"
        variant="outlined"
      />
      <TextField
        sx={{ margin: 3 }}
        type="email"
        placeholder="Email"
        variant="standard"
      />
      <TextField
        sx={{ margin: 3 }}
        type="password"
        placeholder="Password"
        variant="filled"
      />
      <Typography>Hi {name} </Typography>
    </div>
  );
};

export default Test;
