import { useDispatch, useSelector } from "react-redux";
import { updateAction } from "../redux/store/slices/moviesSlice";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Button, TextField, Typography, Paper } from "@mui/material";

function UpdatePage() {
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [voteCount, setVoteCount] = useState("");

    const dispatch = useDispatch();
    const movie = useSelector(state => state.movies.movies.find(movie => movie.id === id));
    const navigate = useNavigate();

    useEffect(() => {
        if (movie) {
            setTitle(movie.title);
            setVoteCount(movie.vote_count);
        }
    }, [movie]);

    function handleSubmit(e) {
        e.preventDefault();
        const updatedData = {
            ...movie,
            title,
            vote_count: +voteCount,
        };

        dispatch(updateAction({
            id: movie.id,
            updatedData
        }));

        setTitle("");
        setVoteCount("");
        navigate("/main");
    }

    return (
        <Box display="flex" justifyContent="center" mt={5}>
            <Paper elevation={3} sx={{ padding: 4, maxWidth: 500 }}>
                <Typography variant="h4" gutterBottom>
                    Update Movie
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
                    <Button type="submit" variant="contained" color="primary" fullWidth sx={{ marginTop: 2 }}>
                        Submit
                    </Button>
                </form>
            </Paper>
        </Box>
    );
}

export default UpdatePage;
