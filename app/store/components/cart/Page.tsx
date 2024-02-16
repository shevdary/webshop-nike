import React from "react";
import {
  Grid,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Dialog,
  DialogActions,
  Button,
  styled
} from "@mui/material";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { Cart } from "@/app/components/constants/types";
import { totalPrice } from "./functions";
import CheckoutForm from "@/app/components/stripe/embedded/CheckoutForm";

const StyledDialog = styled(Dialog)({
  height: "auto",
  alignItems: "top"
});

const StyledGrid = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "auto", // Ensure the container takes full viewport height
  marginTop: 20,
  marginBottom: 10,
  width: '100%',
  minWidth: '100vh', // Default minWidth for large screens
  '@media (max-width: 1280px)': {
    minWidth: '0%', // Adjust minWidth for phone screens
  },
  '@media (max-width: 960px)': {
    minWidth: '0%', // Adjust minWidth for phone screens
  },
  '@media (max-width: 600px)': {
    minWidth: '50vh', // Adjust minWidth for phone screens
  }
});

const StyledTable = styled(Table)({
  backgroundColor: '#fff'
});

const StyledTypography = styled(Typography)(({theme})=>({
  marginTop: theme.spacing(2),
  paddingLeft: theme.spacing(2),
  fontWeight: "bold"
}));

const StyledTableCell = styled(TableCell)({
  width: "5%"
});

const StyledDialogActions = styled(DialogActions)({
  justifyContent: "center"
});

export const CartPage = ({
  openCart,
  setOpenCart,
  cart,
  setCart,
}: {
  setCart: (c: Cart) => void;
  openCart: boolean;
  setOpenCart: (b: boolean) => void;
  cart: Cart;
}): JSX.Element => {
  const handleIncreaseQuantity = (index: number) => {
    const updatedCart = [...cart.products];
    updatedCart[index] = {
      ...updatedCart[index],
      quantity: updatedCart[index].quantity + 1
    };
    setCart({
      ...cart,
      products: updatedCart
    });
  };

  const handleDecreaseQuantity = (index: number) => {
    const updatedCart = [...cart.products];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index] = {
        ...updatedCart[index],
        quantity: updatedCart[index].quantity - 1
      };
      setCart({
        ...cart,
        products: updatedCart
      });
    }
  };

  return (
    <StyledDialog open={openCart} onClose={() => setOpenCart(false)}>
      <StyledGrid container>
        <div style={{ width: "90%", overflowX: "auto" }}>
          <StyledTable>
            <StyledTypography variant="h5" >Cart
            </StyledTypography>
            <TableHead>
              <TableRow>
                <StyledTableCell align="center"><b>Product</b></StyledTableCell>
                <StyledTableCell align="center"><b>Price</b></StyledTableCell>
                <StyledTableCell align="center"><b>Quantity</b></StyledTableCell>
                <StyledTableCell><b>€</b></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.products.map((p, i) => p.quantity > 0 && (
                <TableRow key={i}>
                  <TableCell style={{ width: "5%" }}>{p.product.name}</TableCell>
                  <TableCell style={{ width: "5%" }}>€{p.product.price.toFixed(2)}</TableCell>
                  <TableCell style={{ width: "30%" }}>
                    <Grid container alignItems="center" direction="row">
                        <CiCirclePlus
                          style={{ fontSize: "1.5em", cursor: 'pointer' }}
                          onClick={() => handleIncreaseQuantity(i)}
                        />
                      <Grid item className="mx-1">{p.quantity}</Grid>
                        <CiCircleMinus
                          style={{ fontSize: "1.5em", cursor: 'pointer' }}
                          onClick={() => handleDecreaseQuantity(i)}
                          />
                    </Grid>
                  </TableCell>
                  <TableCell style={{ width: "50%" }}>€{(p.product.price * p.quantity).toFixed(2)}</TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell><b>Total:</b></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell><b>€{totalPrice(cart).toFixed(2)}</b></TableCell>
              </TableRow>
            </TableBody>
          </StyledTable>
        </div>
        <Grid item xs={6} sm={6}>
          <StyledDialogActions>
            <CheckoutForm uiMode="hosted" order={cart} />
            <Button variant="outlined" style={{ borderRadius: 28 }} onClick={() => setOpenCart(false)}>Close</Button>
          </StyledDialogActions>
        </Grid>
      </StyledGrid>
    </StyledDialog>
  );
};
