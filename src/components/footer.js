import React from "react";
import Typography from "@mui/material/Typography";
import './style.css'

export default function Footer() {
  return (
    <footer className="footer">
      <Typography variant="subtitle1">
        <p style={{ float: "right" }}>
          &copy; Copyright 2020. All Rights Reserved.
        </p>
      </Typography>
    </footer>
  );
}
