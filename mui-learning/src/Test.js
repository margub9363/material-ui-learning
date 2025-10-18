import React from "react";
import { Button, Typography } from "@mui/material";

export const Test = () => {
  return (
    <div>
      <Button
        variant="contained"
        size="large"
        sx={{ margin: 3, padding: 2 }}
        color="info"
      >
        First
      </Button>
      <Button variant="outlined" size="medium" color="success">
        Second
      </Button>
      <Button variant="text" size="small">
        {" "}
        Third
      </Button>
    </div>
  );
};

export default Test;
