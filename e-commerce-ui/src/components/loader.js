import React from "react";
import { CircularProgress, Container, Typography } from "@mui/material";
import "./style.css";

export default function Loader({ content }) {
  return (
    <Container maxWidth={false} className="loader-container">
      <CircularProgress color="#4a148c" />
      <Typography variant="h5" className="loader-content">
        {content}
      </Typography>
    </Container>
  );
}
