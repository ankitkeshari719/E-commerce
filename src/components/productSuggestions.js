import { Grid } from "@mui/material";
import React from "react";
import GridItem from "./gridItem";

export default function ProductSuggestions({ products }) {
  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid key={product.id} item xs={12} sm={6} md={3}>
          <GridItem />
        </Grid>
      ))}
    </Grid>
  );
}
