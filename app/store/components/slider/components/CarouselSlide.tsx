import React from "react";
import { Card, CardMedia } from "@mui/material";
import { styled } from "@mui/system";

const CarouselImage = styled(CardMedia)({
  width: '100%', // large screen
  height: 'auto',
});

const CarouselSlide = ({ img }: { img: string }) => {
  return (
    <Card style={{
      minWidth: 200,
      position: 'relative'
    }}>
      <CarouselImage component="img" src={img} />
    </Card>
  );
};

export default CarouselSlide;
