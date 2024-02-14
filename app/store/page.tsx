"use client"
import React, { useState } from "react";
import {
    makeStyles,
    alpha,
 } from "@material-ui/core";
import AppAppBar from "../components/appBar";
import ProductStore from "./components/Store";
import { emptyCart } from "../components/constants/Defaults";
import { CartPage } from "./components/cart/Page";
import { numberOfItems } from "./components/cart/functions";


const useStyles = makeStyles((theme) => ({
   paper: {
    //   backgroundColor: lightBlue,
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
      marginTop: theme.spacing(0.5),
   },
   paleText: {
      color: alpha("#333", 0.8),
   },
   letterSpace: {
      letterSpacing: 2.5,
   },
   padding: {
      marginTop: theme.spacing(0.5),
      paddingBottom: theme.spacing(0.5),
  },
}));

export default function Store(): JSX.Element {
  // const classes = useStyles()
  const [cart, setCart] = useState(emptyCart)
  const [openCart, setOpenCart] = useState(false)
  const [number, setNumber] = useState(numberOfItems(cart))
   return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    
    <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      <AppAppBar 
      numberOfItems={number}
      openCart={openCart} setOpenCart={setOpenCart}/>
    </div>
    <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
    {!openCart && <ProductStore 
       numberOfItems={number}
       openCart={openCart} setOpenCart={setOpenCart} cart={cart} setCart={(c) => {
          setCart(c)
          setNumber(numberOfItems(c))
       }}/>}
        {openCart && <CartPage openCart={openCart} setOpenCart={setOpenCart} cart={cart} setCart={(c) => {
         setCart(c)
         setNumber(numberOfItems(c))
      }}/>}
    </div>
    <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            
            
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            
          </p>
        </a>
       
        <a
          href="/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          // target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Home{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>

          </p>
        </a>
        
        <a
          href="/store/about"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          // target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            About{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn more about Nike Sneakers
          </p>
        </a>
      </div>
  </main>
  );
}
