import React from 'react';
import { Box, Avatar, Typography, Container, Paper, Divider,Button } from "@mui/material";
import { useSelector } from "react-redux";
import { Link  } from 'react-router-dom';

function Profile() {
  const currentUser = useSelector(state => state.users.currentUser);

  return (
    <Box 
      sx={{ 
        fontFamily: 'Arial, sans-serif',
        margin: 0,
        padding: 0,
        background: 'linear-gradient(to right, #2c3e50, #3498db)',
        color: '#333',
      
        height:"100vh",
       
      }}
    >
      <Box 
        sx={{
          background: 'linear-gradient(to right, #2c3e50, #3498db)',
          color: '#ecf0f1',
          padding: '1em',
          textAlign: 'center'
        }}
      >
        <Typography variant="h4" component="h1">User Profile</Typography>
      </Box>

      <Container sx={{ py: 5 }}>
        <Paper elevation={3} sx={{ p: 3, textAlign: 'center', mb: 5 }}>
          <Avatar
            alt={currentUser.username}
            src={`https://ui-avatars.com/api/?name=${currentUser.username}`}
            sx={{ width: 100, height: 100, margin: '0 auto', bgcolor:'#3498db' }}
          />
          <Typography variant="h5" component="h2" sx={{ mt: 2, color: '#3498db' }}>
            {currentUser.username}
          </Typography>
          <Typography variant="body1" sx={{ mt: 1, color: '#2c3e50', fontStyle: 'italic' }}>
            Profile Information
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Typography variant="body1" sx={{ color: '#2c3e50' }}>
              Email: {currentUser.email}
            </Typography>
            <Typography variant="body1" sx={{ color: '#2c3e50' }}>
              Phone: {currentUser.phone}
            </Typography>
          <Typography variant="body1" sx={{ color: '#2c3e50' }}>
            Country: {currentUser.country}
          </Typography>
        </Paper>

        <Button component={Link} to="/main" variant="contained" sx={{ backgroundColor: 'white', color: 'black'  ,marginLeft:"40%"}}>
          Explore Movies
        </Button>
      </Container>
    </Box>
  );
}

export default Profile;
