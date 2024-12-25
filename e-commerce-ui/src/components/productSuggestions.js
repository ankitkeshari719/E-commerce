import { Grid } from "@mui/material";
import React from "react";
import ProductItem from "./productItem";

export default function ProductSuggestions({ products }) {
  return (
    <Grid container spacing={1}>
      {products.map((product) => (
        <Grid key={product.id} item xs={12} sm={6} md={3}>
          <ProductItem product={product} />
        </Grid>
      ))}
    </Grid>
  );
}
