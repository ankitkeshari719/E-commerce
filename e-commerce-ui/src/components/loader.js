import React from "react";
import { CircularProgress, Paper, Typography } from "@mui/material";
import "./style.css";

export default function Loader({ text = "Loading" }) {
  const [content, setContent] = React.useState(text);

  React.useEffect(() => {
    const id = window.setInterval(() => {
      setContent((content) => {
        return content === `${text}...` ? text : `${content}.`;
      });
    }, 300);

    return () => window.clearInterval(id);
  }, [text]);

  return (
    <Typography variant="h5" className="loader-container">
      <CircularProgress /> <span className="loader-content"> {content} </span>
    </Typography>
  );
}
