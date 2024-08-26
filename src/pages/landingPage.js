import React from 'react';
import { Container, Typography, Button, Grid, Box, Card, CardContent, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';
import Register from '../components/Register';


function LandingPage() {
  return (
    <Container maxWidth="lg">
      {/* Hero Section */}
      <Box sx={{ textAlign: 'center', py: 8, backgroundColor: '#000', color: '#fff' }}>
        <Typography variant="h2" gutterBottom>
          Discover, Track, and Enjoy Your Favorite Movies
        </Typography>
        <Typography variant="h5" gutterBottom>
          Explore the latest movies, create your watchlist, and never miss out on what’s trending.
        </Typography>
        
        {/* <Button variant="contained" color="primary" sx={{ mt: 4 }} component={Link} 
        to={`/main`} >
         
        </Button> */}
        <Button component={Link} to="/main/register" variant="contained" color="primary" sx={{ mt:4 ,ml:2}}>
        Get Started
        </Button>
       
      </Box>

      {/* Features Section */}
      <Box sx={{ py: 8 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Features
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h6">Discover Movies</Typography>
                <Typography variant="body2">Show trending and recommended movies.</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h6">FavoriteList</Typography>
                <Typography variant="body2">save your favortie movies to favorite list</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h6">Crud operations</Typography>
                <Typography variant="body2">Create,update,delete and read movies</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h6">User Profile</Typography>
                <Typography variant="body2">User can register or login to website and see profile page</Typography>
              </CardContent>
            </Card>
          </Grid>
          
         
         
        </Grid>
      </Box>

      {/* Trending Movies Section */}
      <Box sx={{ py: 8, backgroundColor: '#f4f4f4' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Trending Movies
        </Typography>
        <Grid container spacing={4}>
          {/* Example Movie Card */}
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="300"
                image="https://images.pexels.com/photos/22483588/pexels-photo-22483588/free-photo-of-movie-poster-by-entrance-to-cinema.jpeg"
                alt="Movie Poster"
              />
              <CardContent>
                <Typography variant="h6">Blood and Sand</Typography>
                <Typography variant="body2">Rating: 8.5/10</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="300"
                image="https://images.unsplash.com/photo-1580130775562-0ef92da028de?q=80&w=1950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Movie Poster"
              />
              <CardContent>
                <Typography variant="h6">Braniff and Airways</Typography>
                <Typography variant="body2">Rating: 8.5/10</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="300"
                image="https://images.pexels.com/photos/9807283/pexels-photo-9807283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Movie Poster"
              />
              <CardContent>
                <Typography variant="h6">Titanic</Typography>
                <Typography variant="body2">Rating: 8.5/10</Typography>
              </CardContent>
            </Card>
          </Grid>
         
        </Grid>
      </Box>

      {/* Footer Section */}
      <Box sx={{ py: 4, textAlign: 'center', backgroundColor: '#000', color: '#fff' }}>
        <Typography variant="body2">&copy; 2024 Movie App. All rights reserved.</Typography>
      </Box>
    </Container>
  );
}

export default LandingPage;
