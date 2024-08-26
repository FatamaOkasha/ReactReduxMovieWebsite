import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { decCounter, incCounter } from "../redux/store/slices/counter";
import { addFavorite, removeFavorite } from "../redux/store/slices/favorites";
import { deleteAction, moviesAction, setMovies } from "../redux/store/slices/moviesSlice";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Grid,
  IconButton,
} from "@mui/material";

function Movies() {
  const movies = useSelector((state) => state.movies.movies);
  const favorites = useSelector((state) => state.favorites.favorites);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(moviesAction());
  }, [dispatch]);
  function handleAddFavorite(movie) {
    if (favorites.some(fav => fav.id === movie.id)) {
      dispatch(removeFavorite(movie.id));
      dispatch(decCounter());
    } else {
      dispatch(incCounter());
      dispatch(addFavorite(movie));
    }
  }
  

  function handleDelete(movie) {
    const updatedMovies = movies.filter((m) => m.id !== movie.id);
    dispatch(setMovies(updatedMovies));

    try {
      // console.log(`Movie with ID ${movie.id} deleted successfully`);
      dispatch(deleteAction(movie.id));
    } catch (error) {
      console.error(`Error deleting movie with ID ${movie.id}`, error);
    }
  }

  const imgPath = "https://image.tmdb.org/t/p/w500/";

  return (
    <Grid container spacing={3} justifyContent="center">
      {movies.map((movie) => (
        <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
          <Card sx={{ maxWidth: 345, m: 2 }}>
            <CardMedia
              component="img"
              height="300"
              image={imgPath + movie.poster_path}
              alt={movie.title}
            />
            <CardContent>
              <Typography variant="h6" component="div">
                {movie.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Vote Count: {movie.vote_count}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" component={Link} to={`movies/${movie.id}`}>
                Show
              </Button>
              <Button size="small" component={Link} to={`update/${movie.id}`}>
                Update
              </Button>
              <Button size="small" onClick={() => handleDelete(movie)}>
                Delete
              </Button>
              <IconButton
                size="small"
                onClick={() => handleAddFavorite(movie)}
              >
                {favorites.some(fav => fav.id === movie.id) ? (
                  <FavoriteIcon style={{ color: 'red' }} />
                ) : (
                  <FavoriteBorderOutlinedIcon style={{ color: 'blue' }} />
                )}
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default Movies;
