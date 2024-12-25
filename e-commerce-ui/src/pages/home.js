import React from "react";
import { Typography, Paper } from "@mui/material";

import { useProductsWithLimit } from "../hooks/useProducts";
import { Loader, ProductSuggestions } from "../components";
import { LOADER_CONTENTS } from "../constant/constants";
import "./style.css";

export default function Home() {
  const { response: products, loading } = useProductsWithLimit();
  if (loading) {
    return <Loader text={LOADER_CONTENTS.ALL_PRODUCTS} />;
  }
  return (
    <Paper square>
      <Typography className="home-page-header-1" variant="h3">
        Our Bestsellers
      </Typography>
      <Typography className="home-page-header-2" variant="h5">
        Don't miss out Top Selling styles
      </Typography>
      <ProductSuggestions products={products} />
    </Paper>
  );
}
