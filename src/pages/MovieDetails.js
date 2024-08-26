import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { moviesAction } from '../redux/store/slices/moviesSlice';
import { Box, Typography, Button, Card, CardContent, CardMedia } from '@mui/material';

function MovieDetails() {
    const { id } = useParams();
    const movies = useSelector(state => state.movies.movies);
    const dispatch = useDispatch();
    const imgPath = "https://image.tmdb.org/t/p/w500/";

    useEffect(() => {
        dispatch(moviesAction());
    }, [dispatch]);

    const movie = movies.find(movieObj => movieObj.id === id);

    return (
        <Box display="flex" flexDirection="column" alignItems="center" margin="20px">
            {movie ? (
                <Card sx={{ maxWidth: 600, boxShadow: 3, borderRadius: 2 }}>
                    <CardMedia
                        component="img"
                        image={imgPath + movie.poster_path}
                        alt={movie.title}
                        sx={{ height: 400, objectFit: "contain" }}
                    />
                    <CardContent>
                        <Typography variant="h4" gutterBottom>
                            Movie Details of {id}
                        </Typography>
                        <Typography variant="body1">
                            Movie original language: {movie.original_language}
                        </Typography>
                        <Typography variant="body1">
                            Movie vote average: {movie.vote_average}
                        </Typography>
                        <Typography variant="body1">
                            Movie original title: {movie.title}
                        </Typography>
                    </CardContent>
                </Card>
            ) : (
                <Typography variant="h5" color="error">
                    Movie not found
                </Typography>
            )}
            <Button
                component={Link}
                to="/"
                variant="contained"
                color="primary"
                sx={{ marginTop: 2 }}
            >
                Back to Movies
            </Button>
        </Box>
    );
}

export default MovieDetails;
