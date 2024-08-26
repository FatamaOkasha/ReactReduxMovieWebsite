import React from "react";
import { Box, Typography } from "@mui/material";

function About() {
  return (
    <Box
      sx={{
        width: "40%",
        margin: "5% auto",
        padding: "20px",
        textAlign: "center",
        boxShadow: "5px 5px 10px #ccc", // Added box shadow
        borderRadius: "10px", // Optional: adds rounded corners

      }}
    >
      <Typography variant="h2" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1" paragraph>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem praesentium repellat modi sunt et perspiciatis temporibus, sapiente eveniet dolore repudiandae dolor saepe commodi, culpa laudantium suscipit officia est delectus dignissimos?Lorem ipsum dolor sit, amet 
      </Typography>
      <Typography variant="body1" paragraph>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, nisi? Voluptates nisi praesentium eius hic alias commodi error, explicabo consequatur expedita atque nostrum fugiat veniam perferendis nihil perspiciatis rerum ipsum.lorem
      </Typography>
      <Typography variant="body1" paragraph>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur aliquam perferendis iusto corrupti! Nulla, alias, quis omnis expedita excepturi architecto illum ipsam eum amet, sunt sint. Aspernatur necessitatibus ea dolorem.
      </Typography>
    </Box>
  );
}

export default About;
