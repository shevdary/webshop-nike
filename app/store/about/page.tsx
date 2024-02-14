"use client"
import React, { useState } from "react";
import {
    makeStyles,
    alpha,
    Paper,
    Grid,
 } from "@material-ui/core";
import AboutSection from "./AboutSection";
import { emptyCart } from "@/app/components/constants/Defaults";
import { numberOfItems } from "../components/cart/functions";


const useStyles = makeStyles((theme) => ({
  paper: {
     minHeight: "100vh",
     display: "flex",
     justifyContent: "center", // Center the content horizontally
     alignItems: "center", // Center the content vertically
     [theme.breakpoints.up("sm")]: {
       minWidth: "80vw", // Set the minimum width on small screens
     },
     [theme.breakpoints.up("lg")]: {
       minWidth: "90vw", // Set the minimum width on large screens
     },
     padding: theme.spacing(4), // Add padding for spacing
   },
  }))

export default function AboutPage(): JSX.Element {
  const classes = useStyles()
  const [cart, setCart] = useState(emptyCart)
  const [openCart, setOpenCart] = useState(false)
  const [number, setNumber] = useState(numberOfItems(cart))
  return (
   <>

<Paper 
className={classes.paper}
style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center", // Center the content horizontally
      alignItems: "center", // Center the content vertically
      padding: 4, // Add padding for spacing
    }}>
      <Grid container xs={12} md={12} lg={12} xl={12} style={{
      marginTop: 0.5,
      paddingBottom: 0.5,
  }}>
     <Grid item xs={12} md={12} lg={12} xl={12} style={{
      marginTop: 0.5,
      paddingBottom: 0.5,
  }}>
     <AboutSection openCart={openCart} numberOfItems={number} 
     setOpenCart={setOpenCart} 
     />
    </Grid>
    </Grid>
    </Paper>
   </>
  );
}
