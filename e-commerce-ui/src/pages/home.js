import React from "react";
import { Container, Typography } from "@mui/material";

import { useProductsWithLimit } from "../hooks/useProducts";
import { Loader, ProductSuggestions } from "../components";
import { LOADER_CONTENTS } from "../constant/constants";
import "./style.css";

export default function Home() {
  const { response: products, loading } = useProductsWithLimit();
  if (loading) {
    return <Loader content={LOADER_CONTENTS.ALL_PRODUCTS} />;
  }
  return (
    <Container maxWidth={false}>
      <Typography>Our Bestsellers</Typography>
      <Typography>Don't miss out Top Selling styles</Typography>
      <ProductSuggestions products={products} />
    </Container>
  );
}
