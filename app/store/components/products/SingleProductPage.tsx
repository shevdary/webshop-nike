import React from "react";
import { Grid, Typography, Button, alpha, Chip, styled } from "@mui/material";
import { Cart, MyProduct } from "@/app/components/constants/types";
import ImageSlider from "../slider/Image";
import { addToCart } from "../cart/functions";

const ContainerGrid = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(4),
  justifyContent: "space-around",
  height: "auto",
  alignItems: "center",
  "&:nth-child(2)": {
    backgroundColor: "white",
  },
  [`@media (min-width: ${theme.breakpoints.values.md}px)`]: {
    padding: theme.spacing(10),
  },
}));

const ImgContainer = styled("div")(({ theme }) => ({
  width: "100%",
  height: "auto",
  boxShadow: theme.shadows[3],
}));

const BackButton = styled(Button)({
  borderRadius: 28,
});

const StyledTypography = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(0.5),
  color: "black",
}));

const StyledChip = styled(Chip)(({ theme }) => ({
  marginTop: theme.spacing(0.5),
}));

const StyledButton = styled(Button)({
  letterSpacing: 2.5,
});

const SingleProductPage = ({
  item,
  setProduct,
  cart,
  setCart,
}: {
  cart: Cart;
  setCart: (c: Cart) => void;
  item: MyProduct;
  setProduct: (a: MyProduct | null) => void;
}) => {
  const { description, price, name, category } = item;

  const handleClick = () => {
    addToCart(setCart, cart, item);
  };

  return (
    <ContainerGrid container>
      <Grid item xs={3} sm={3}></Grid>
      <Grid item xs={6} sm={6}>
        <BackButton variant="outlined" onClick={() => setProduct(null)}>
          {`< Back`}
        </BackButton>
      </Grid>
      <Grid item xs={3} sm={3}></Grid>
      <Grid item xs={12} sm={4}>
        <ImgContainer>
          <ImageSlider item={item} />
        </ImgContainer>
      </Grid>
      <Grid item xs={12} sm={6}>
        <StyledTypography variant="h4">{name}</StyledTypography>
        <StyledChip label={category} variant="outlined" />
        <Typography
          variant="body1"
          sx={{ color: alpha("#333", 0.8), marginTop: 0.5 }}
        >
          {description}
        </Typography>
        <StyledTypography variant="subtitle2">€{price}</StyledTypography>
        <StyledButton
          fullWidth
          variant="contained"
          color="primary"
          onClick={handleClick}
        >
          Add to Cart
        </StyledButton>
      </Grid>
    </ContainerGrid>
  );
};

export default SingleProductPage;
