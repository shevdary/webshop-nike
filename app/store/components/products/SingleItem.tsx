import React from "react";
import {
  Card,
  CardMedia,
  Grid,
  Typography,
  CardActionArea,
  CardContent,
  Button,
} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Cart, MyProduct } from "@/app/components/constants/types";
import { addToCart } from "../cart/functions";
import { styled } from "@mui/material/styles";

const StyledCard = styled(Card)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    maxWidth: 150,
  },
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  height: 140,
  [theme.breakpoints.up("sm")]: {
    height: 100,
  },
}));

export const SingleProduct = ({
    item,
    setProduct,
    setCart,
    cart,
  }: {
  cart: Cart;
  setCart: (c: Cart) => void;
  item: MyProduct;
  setProduct: (a: MyProduct | null) => void;
}) => {
  const { price, img, name } = item;

  return (
    <Grid item className="justify-center md:justify-normal w-full md:w-auto stepan">
      <StyledCard>
        <CardActionArea onClick={() => setProduct(item)}>
          <StyledCardMedia
            image={img[0]}
            title={name}
          />
          <CardContent>
            <Typography gutterBottom variant="body1" component="h4">
              {name.substring(0, 20)}...
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
            >
              €{price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <Button className="w-full text-black" onClick={() => addToCart(setCart, cart, item)}>
          <ShoppingCartIcon/>+
        </Button>
      </StyledCard>
    </Grid>
  );
};
