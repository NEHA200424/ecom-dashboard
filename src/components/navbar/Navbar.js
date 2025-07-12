// src/components/navbar/Navbar.js
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, useTheme } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { useColorMode } from '../../pages/_app'; // ✅ this uses the context from _app.js

const Navbar = () => {
  const theme = useTheme();
  const { toggleColorMode } = useColorMode();

  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{ mb: 3 }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Dashboard
        </Typography>
        <IconButton onClick={toggleColorMode} color="inherit">
          {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;



