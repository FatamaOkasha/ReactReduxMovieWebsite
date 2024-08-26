import React from 'react';
import { Link  } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box,Badge } from '@mui/material';
import { useSelector } from "react-redux";


function Navbar() {
  const counter = useSelector(state => state.counter.counter);

  return (
    <AppBar position="static" sx={{ backgroundColor: '#4E31AA' }}>
      <Toolbar sx={{ justifyContent: 'space-evenly' }}>
        <Button component={Link} to="/" sx={{ color: 'white' }}>
          Home
        </Button>
        <Button component={Link} to="/about" sx={{ color: 'white' }}>
          About
        </Button>
        <Button component={Link} to="/favorites" sx={{ color: 'white' }}>
        <Badge color="secondary" badgeContent={counter}>
        Favorites
        </Badge> 
        </Button>
        <Typography variant="h6" sx={{ color: 'black' }}>
        
        </Typography>
        <Button component={Link} to="/create" variant="contained" sx={{ backgroundColor: 'white', color: 'black' }}>
          Create New Movie
        </Button>
        <Button component={Link} to="/register" variant="contained" sx={{ backgroundColor: 'white', color: 'black' }}>
          Register
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
