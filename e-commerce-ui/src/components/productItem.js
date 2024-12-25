import * as React from "react";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CartContext from "../context/cart";

export default function ProductItem({ product }) {
  const cart = React.useContext(CartContext);
  const navigateUrl = `/${product.category}/${product.id}`;

  const addCart = (e) => {
    e.preventDefault();
    cart.addItem(product.id);
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
        <Typography variant="body2">
          {product.title}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon onClick={(e) => addCart(e)} />
        </IconButton>
      </CardActions>
    </Card>
  );
}
