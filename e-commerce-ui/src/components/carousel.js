import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import { CAROUSEL_ITEMS } from "../constant/constants";

export default function CarouselWrapper() {
  return (
    <Carousel
      fullHeightHover={true} // We want the nav buttons wrapper to only be as big as the button element is
      navButtonsAlwaysVisible={true}
    >
      {CAROUSEL_ITEMS.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Paper>
      <img src={props.item.imageSrc} alt="test" width={1200} height={500} />
    </Paper>
  );
}
