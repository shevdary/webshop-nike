import React, { useState } from "react";
import Slide from "@mui/material/Slide";
import { Grid, Stack } from "@mui/material";
import Dots from "./components/Dots";
import Arrow from "./components/Arrow";
import CarouselSlide from "./components/CarouselSlide";
import { styled } from "@mui/system";
import { MyProduct } from "@/app/components/constants/types";

const ImageGrid = styled(Grid)({
  justifyContent: "flex-start",
  minHeight: "30vh",
  minWidth: "60vh"
});

const ImageSlider = ({ item }: { item: MyProduct }) => {
  const [slideIn, setSlideIn] = useState(true);
  const [slideDirection, setSlideDirection] = useState<"left" | "right">("right");
  const [index, setIndex] = useState(0);
  const content = item.img[index];
  const numSlides = item.img.length;

  const onArrowClick = (direction: "left" | "right") => {
    const increment = direction === "left" ? -1 : 1;
    const newIndex = (index + increment + numSlides) % numSlides;
    const oppDirection = direction === "left" ? "right" : "left";
    setSlideDirection(direction);
    setSlideIn(false);

    setTimeout(() => {
      setIndex(newIndex);
      setSlideDirection(oppDirection);
      setSlideIn(true);
    }, 500);
  };

  return (
    <ImageGrid container xs={12}>
      <Grid item xs={4} style={{ position: "relative" }}>
        <Slide in={slideIn} direction={slideDirection}>
          <div style={{ width: "100%" }}>
            <CarouselSlide img={content} />
          </div>
        </Slide>
        <Stack
          direction="row"
          justifyContent="space-between"
          position="absolute"
          top="75%"
          width="100%"
        >
          <Arrow direction="left" handleClick={() => onArrowClick("left")} />
          <Arrow direction="right" handleClick={() => onArrowClick("right")} />
        </Stack>
        <Stack direction="row" justifyContent="center">
          <Dots mates={item.img} index={index} />
        </Stack>
      </Grid>
    </ImageGrid>
  );
};

export default ImageSlider;
