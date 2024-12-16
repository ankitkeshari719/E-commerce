import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";

export default function CarouselWrapper() {
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
  ];

  return (
    <Carousel
      autoPlay={true}
      fullHeightHover={true} // We want the nav buttons wrapper to only be as big as the button element is
      navButtonsAlwaysVisible={true}
      cycleNavigation={true}
      animation="slide"
      duration={100}
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Paper>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>
      <img src="https://nobero.com/cdn/shop/files/Sale_D2C_banners_-02.webp?v=1731677025" alt="test" width={1200} height={250}/>

      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
}
