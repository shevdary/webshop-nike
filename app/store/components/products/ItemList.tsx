import React from "react";
import {
  CircularProgress,
  Grid,
  Button,
  Typography,
} from "@mui/material";
import { SingleProduct } from "./SingleItem";
import { Cart, MyProduct } from "@/app/components/constants/types";
import { sneakers, running, products } from "@/app/components/constants/Products";
import { styled } from "@mui/material/styles";

const StyledGridContainer = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  marginTop: theme.spacing(20),
  marginBottom: theme.spacing(10),
}));

const StyledProgressContainer = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  marginTop: theme.spacing(2),
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const Root = styled("div")(({theme}) => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  marginTop: theme.spacing(5),
}));

const ItemList = ({
  category,
  setProduct,
  setCart,
  cart
}: {
  cart: Cart,
  setCart: (c: Cart) => void,
  category: string,
  setProduct: (a: MyProduct | null) => void
}) => {
  const items = returnCategory(category);
  const pending = false;

  const mapThroughItems = (cart: Cart, items: MyProduct[], setCart: (c: Cart) => void, setProduct: (a: MyProduct | null) => void ) => {
    return items.map((item: MyProduct, idx) => {
      return <SingleProduct key={idx} item={item} setProduct={setProduct} cart={cart} setCart={setCart} />;
    });
  };

  return (
    <Root>
      {!pending && items.length > 0 ? (
        <StyledGridContainer container spacing={{xs: 1, md: 4}} xs={10} sm={4} lg={10}>
          {mapThroughItems(cart, items, setCart, setProduct)}
        </StyledGridContainer>
      ) : !pending && items.length === 0 ? (
        <Grid container direction="column" alignItems="center">
          <Typography variant="h4" color="initial">
            No Items Found
          </Typography>
          <StyledButton color="primary" variant="contained">
            Back to home
          </StyledButton>
        </Grid>
      ) : (
        <StyledProgressContainer container>
          <CircularProgress size="5rem" />
        </StyledProgressContainer>
      )}
    </Root>
  );
};

export default ItemList;

const returnCategory = (category: string) => {
  let result: MyProduct[];
  switch (true) {
    case category === 'Sneakers':
      result = sneakers;
      break;
    case category === 'Running':
      result = running;
      break;
    default:
      result = products;
  }
  return result;
};
