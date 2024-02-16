import React from "react";
import { Grid, Typography, Button, alpha, Chip, styled } from "@mui/material";
import { Cart, MyProduct } from "@/app/components/constants/types";
import ImageSlider from "../slider/Image";
import { addToCart } from "../cart/functions";

const ContainerGrid = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(4),
  position: "relative",
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

const BackButton = styled(Button)(({theme})=>({
  position: "absolute",
  top: theme.spacing(3),
  left: theme.spacing(3),
  borderRadius: 28,
}));

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
    <ContainerGrid container className="mb-2">
      <BackButton variant="outlined" onClick={() => setProduct(null)}>
        {`< Back`}
      </BackButton>
      <Grid item xs={12} sm={4}>
          <ImageSlider item={item} />
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
          size="large"
          variant="contained"
          color="primary"
          onClick={handleClick}
          classes={{ contained: `btn btn-md bg-[#3f51b5] h-full` }}
        >
          Add to Cart
        </StyledButton>
      </Grid>
    </ContainerGrid>
  );
};

export default SingleProductPage;
