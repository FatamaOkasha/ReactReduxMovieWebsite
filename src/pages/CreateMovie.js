import { useDispatch } from "react-redux";
import { useState } from "react";
import { createAction } from "../redux/store/slices/moviesSlice";
import { useNavigate } from "react-router-dom";
import { Box, Button, TextField, Typography, Paper } from "@mui/material";

function CreateMovie() {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const [voteCount, setVoteCount] = useState("");
    const [poster_path, setPoster_path] = useState("");
    const [original_language, setoriginalLanguage] = useState("");
    const [vote_average, setvoteAverage] = useState("");
    const navigate = useNavigate();
    const imgPath = "https://image.tmdb.org/t/p/w500/";

    function handleSubmit(e) {
        e.preventDefault();
        const newMovie = {
            title,
            vote_count: +voteCount,
            poster_path,
            original_language,
            vote_average: +vote_average
        };
        dispatch(createAction(newMovie));
        setTitle("");
        setPoster_path("");
        setVoteCount("");
        setoriginalLanguage("");
        setvoteAverage("");
        navigate("/");
    }

    return (
        <Box display="flex" justifyContent="center" mt={5}>
            <Paper elevation={3} sx={{ padding: 4, maxWidth: 500 }}>
                <Typography variant="h4" gutterBottom>
                    Create New Movie
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        fullWidth
                        margin="normal"
                        required
                    />
                    <TextField
                        label="Vote Count"
                        value={voteCount}
                        onChange={(e) => setVoteCount(e.target.value)}
                        fullWidth
                        margin="normal"
                        required
                    />
                    <TextField
                        label="Vote Average"
                        value={vote_average}
                        onChange={(e) => setvoteAverage(e.target.value)}
                        fullWidth
                        margin="normal"
                        required
                    />
                    <TextField
                        label="Original Language"
                        value={original_language}
                        onChange={(e) => setoriginalLanguage(e.target.value)}
                        fullWidth
                        margin="normal"
                        required
                    />
                    <TextField
                        label="Image URL"
                        value={imgPath + poster_path}
                        onChange={(e) => setPoster_path(e.target.value)}
                        fullWidth
                        margin="normal"
                        required
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth sx={{ marginTop: 2 }}>
                        Submit
                    </Button>
                </form>
            </Paper>
        </Box>
    );
}

export default CreateMovie;
