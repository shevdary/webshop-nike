import { Dialog, DialogActions, Typography } from "@material-ui/core"
import React from "react";
import {
    makeStyles,
    alpha,
    Grid,
 } from "@material-ui/core";
import { Button, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { Cart } from "@/app/components/constants/types";
import { totalPrice } from "./functions";
import CheckoutForm from "@/app/components/stripe/embedded/CheckoutForm";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

const useStyles = makeStyles((theme) => ({
   container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "auto", // Ensure the container takes full viewport height
      marginTop: 20,
      marginBottom: 10,
      minWidth: '100vh', // Default minWidth for large screens
      [theme.breakpoints.down('lg')]: {
         minWidth: '100vh', // Adjust minWidth for phone screens
       },
       [theme.breakpoints.down('md')]: {
         minWidth: '100vh', // Adjust minWidth for phone screens
       },
      [theme.breakpoints.down('sm')]: {
        minWidth: '50vh', // Adjust minWidth for phone screens
      },
    },
    tableContainer: {
      width: "90%",
      overflowX: "auto", // Enable horizontal scrolling if needed
   },
   imgContainer: {
      width: "100%",
      height: "auto",
      boxShadow: theme.shadows[3],
   },
   img: {
      width: "100%",
      height: "auto",
   },
   marginTopTwo: {
      marginTop: theme.spacing(2),
   },
   paleText: {
      color: alpha("#fff", 0.8),
   },
   letterSpace: {
      letterSpacing: 2.5,
   },
}));

export const CartPage = ({
   openCart,
   setOpenCart,
   cart, 
   setCart,
}: {
   setCart: (c: Cart) => void;
   openCart: boolean;
   setOpenCart: (b: boolean) => void;
   cart: Cart}): JSX.Element => {
    const classes = useStyles()

    return (
        <Dialog 
        style={{height: "auto", alignItems: "top"}}
        open={openCart} onClose={() => setOpenCart(false)}>
        <Grid container className={classes.container}>
      
         <div className={classes.tableContainer}>
    
         <Table style={{backgroundColor: '#fff'}}>
            <Typography align="center" variant="h5">
            <b>Cart</b>
            </Typography>
            <TableHead>
            <TableRow>
               <TableCell align="center" style={{ width: "5%" }}><b>Product</b></TableCell>
               <TableCell align="center" style={{ width: "5%" }}><b>Price</b></TableCell>
               <TableCell align="center" style={{ width: "5%" }}><b>Quantity</b></TableCell>
               <TableCell style={{ width: "5%" }}><b>€</b></TableCell>

               </TableRow>
            </TableHead>
         <TableBody>
         {cart.products.map((p,i) => p.quantity > 0 && (
            <TableRow key={i}>
               <TableCell style={{ width: "5%" }}>{p.product.name}</TableCell>
               <TableCell style={{ width: "5%" }}>€{p.product.price.toFixed(2)}</TableCell>
               
               <TableCell style={{ width: "20%" }}>
  <Grid container alignItems="center">
    <Grid item>{p.quantity}</Grid>
    <Grid item>
    <CiCirclePlus 
    style={{fontSize: "2em", cursor: 'pointer'}}
    onClick={() => {
          const old = [...cart.products];
          old[i] = {
            ...old[i],
            quantity: p.quantity + 1,
          };
          setCart({
            ...cart,
            products: old,
          });
        }} />
      <CiCircleMinus
      style={{fontSize: "2em", cursor: 'pointer'}}
        onClick={() => {
          const old = [...cart.products];
          old[i] = {
            ...old[i],
            quantity: p.quantity - 1,
          };
          setCart({
            ...cart,
            products: old,
          });
        }}/>
    </Grid>
  </Grid>
</TableCell>
<TableCell
 style={{ width: "50%" }}
 >€{(p.product.price * p.quantity).toFixed(2)}</TableCell>
               </TableRow>
         ))}
         <TableRow>
         <TableCell><b>Total:</b></TableCell>
         <TableCell></TableCell>
         <TableCell></TableCell>
         <TableCell><b>€{totalPrice(cart).toFixed(2)}</b></TableCell>
         </TableRow>
         </TableBody>
      </Table>
      </div>
      <Grid item xs={3} sm={3}></Grid>
         <Grid item xs={6} sm={6}>
         <DialogActions>
         <CheckoutForm uiMode="hosted" order={cart}/>
         
         
            <Button 
            variant="outlined"
            style={{borderRadius: 28}} onClick={() => setOpenCart(false)}>Close</Button>
         </DialogActions>
         </Grid>
         </Grid>

         </Dialog>
    )
}