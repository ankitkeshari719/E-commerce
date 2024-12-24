import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CartContext from "../context/cart";

export default function GridItem({ product }) {
  const cart = React.useContext(CartContext);
  const navigateUrl = `/${product.category}/${product.id}`;

  const addCart = (e) => {
    e.preventDefault();
    cart.addItem(product.id);
  };

  const [expanded, setExpanded] = React.useState(false);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={product.title}
      />
      <CardMedia
        component="img"
        height="400"
        image={product.image}
        alt={product.title}
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
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
