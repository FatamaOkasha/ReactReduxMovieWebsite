import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

function Error() {
    return (
        <Box
            display="flex"
            justifyContent="space-around"
            alignItems="center"
            minHeight="100vh"
            bgcolor="background.default"
            color="text.primary"
            padding={3}
        >
            <img src="images.jpeg" alt="Error" style={{ maxWidth: "50%", borderRadius: "8px" }} />
            <Box textAlign="center">
                <Typography variant="h2" component="h2" gutterBottom>
                    OOPS! PAGE NOT FOUND
                </Typography>
                <Link to="/" style={{ textDecoration: "none" }}>
                    <Button variant="contained" color="primary" size="large">
                        Back to Movies
                    </Button>
                </Link>
            </Box>
        </Box>
    );
}

export default Error;
