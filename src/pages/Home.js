import React from "react";
import { CircularProgress, Container } from "@mui/material";

import { useProductsWithLimit } from "../hooks/useProducts";
import { ProductSuggestions } from "../components";

export default function Home() {
  const { response: products, loading } = useProductsWithLimit(10);
  if (loading) {
    return (
      <>
        <CircularProgress color="inherit" />
      </>
    );
  }
  return (
    <Container> 
      <ProductSuggestions products={products} />
    </Container>
  );
}
