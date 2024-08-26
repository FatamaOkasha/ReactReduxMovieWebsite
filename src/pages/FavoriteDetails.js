import React from 'react';
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { changeFavorites } from "../redux/store/slices/favorites";
import { decCounter } from "../redux/store/slices/counter";
import "./MovieDetails.css";

function FavoriteDetails() {
    var favorites = useSelector(state => state.favorites.favorites);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // console.log("favoritesArray", favorites);

    function handleDeleteFavMovie(id) {
        favorites = favorites.filter((fav) => fav.id !== id);
        dispatch(decCounter());
        dispatch(changeFavorites(favorites));
        if (favorites.length === 0) navigate("/main");
    }

    const imgPath = "https://image.tmdb.org/t/p/w500/";
    return (
        <Box
            display="flex"
            flexWrap="wrap"
            gap={3}
            justifyContent="center"
            padding={3}
        >
            {favorites.map((resObj) => (
                <Box
                    key={resObj.id}
                    width="250px"
                    textAlign="center"
                    boxShadow="5px 5px 15px rgba(0,0,0,0.3)"
                    borderRadius={2}
                    overflow="hidden"
                >
                    <img
                        src={imgPath + resObj.poster_path}
                        alt={resObj.title}
                        style={{ width: "100%", height: "auto" }}
                    />
                    <Box padding={2}>
                        <Typography variant="h6" gutterBottom>
                            {resObj.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            Voting: {resObj.vote_count}
                        </Typography>
                        <Button
                            variant="contained"
                            
                            style={{ marginTop: "15px" }}
                            onClick={() => handleDeleteFavMovie(resObj.id)}
                        >
                            Delete
                        </Button>
                    </Box>
                </Box>
            ))}
        </Box>
    );
}

export default FavoriteDetails;
