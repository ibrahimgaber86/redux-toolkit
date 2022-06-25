import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";

function Navbar() {
  return (
    <AppBar position='sticky' sx={{ mb: 3 }}>
      <Toolbar>
        <Typography variant='h3' component='h1'>
          Redux-Toolkit
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
