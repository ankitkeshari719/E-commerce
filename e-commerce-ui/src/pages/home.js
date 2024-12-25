import React from "react";
import { CircularProgress, Container } from "@mui/material";

import { useProductsWithLimit } from "../hooks/useProducts";
import { ProductSuggestions } from "../components";
import './style.css'

export default function Home() {
  const { response: products, loading } = useProductsWithLimit();
  if (loading) {
    return (
      <Container maxWidth={false} className="loader-container"> 
        <CircularProgress color="inherit" />
      </Container>
    );
  }
  return (
    <Container maxWidth={false}> 
      <ProductSuggestions products={products} />
    </Container>
  );
}
