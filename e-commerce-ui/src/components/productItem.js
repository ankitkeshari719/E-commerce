import * as React from "react";
import "./style.css";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CartContext from "../context/cart";

export default function ProductItem({ product }) {
  const cart = React.useContext(CartContext);
  const navigateUrl = `/${product.category}/${product.id}`;

  const addToCart = (e) => {
    e.preventDefault();
    cart.addItemToCart(product.id);
  };

  const addToFavorite = (e) => {
    e.preventDefault();
    cart.addItemToFavorite(product.id);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="400"
        image={product.image}
        alt={product.title}
      />
      <CardContent>
        <Typography variant="body2" className="product-item-title">
          {product.title}
        </Typography>
        <Typography className="product-item-price">&#8377;{product.price}</Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label="add to favorites"
          className="product-item-button-favorite"
        >
          <FavoriteIcon onClick={(e) => addToCart(e)} />
        </IconButton>
        <IconButton
          aria-label="add to cart"
          className="product-item-button-cart"
        >
          <ShoppingCartIcon onClick={(e) => addToFavorite(e)} />
        </IconButton>
      </CardActions>
    </Card>
  );
}
