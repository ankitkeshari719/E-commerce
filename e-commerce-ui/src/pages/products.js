import React from "react";
import { useParams } from "react-router-dom";
import { useProductsWithCategory } from "../hooks/useProducts";
import { Loading, ProductGrid } from "../components";
import { Paper } from "@mui/material";

export default function Products() {
  const { category } = useParams();

  const { response: products, loading } = useProductsWithCategory(category);
  if (loading) {
    return <Loading text={`Fetching products for ${category}`} />;
  }
  return (
    <Paper square>
      <ProductGrid products={products} />
    </Paper>
  );
}
