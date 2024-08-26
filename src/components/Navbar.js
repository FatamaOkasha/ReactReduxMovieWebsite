import React from 'react';
import { Link  } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button,Badge } from '@mui/material';
import { useSelector } from "react-redux";


function Navbar() {
  const counter = useSelector(state => state.counter.counter);

  return (
    <AppBar position="static" sx={{ backgroundColor: '#4E31AA' }}>
      <Toolbar sx={{ justifyContent: 'space-evenly' }}>
        <Button component={Link} to="/main" sx={{ color: 'white' }}>
          Home
        </Button>
        <Button component={Link} to="/main/about" sx={{ color: 'white' }}>
          About
        </Button>
        <Button component={Link} to="/main/favorites" sx={{ color: 'white' }}>
        <Badge color="secondary" badgeContent={counter}>
        Favorites
        </Badge> 
        </Button>
        <Typography variant="h6" sx={{ color: 'black' }}>
        
        </Typography>
        <Button component={Link} to="/main/create" variant="contained" sx={{ backgroundColor: 'white', color: 'black' }}>
          Create New Movie
        </Button>
       
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
