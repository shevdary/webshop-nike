
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: `Store | ${ShopName}`,
};

import React, { useState } from "react";
import { Container, Input, makeStyles } from "@material-ui/core";
import { ShopName } from "@/app/components/constants/Texts";
import Categories from "./products/Categories";
import ItemList from "./products/ItemList";
import ScrollBtn from "./products/ScrlBtn";
import SingleProductPage from "./products/SingleProductPage";
import { Cart, MyProduct } from "@/app/components/constants/types";
import AppAppBar from "@/app/components/appBar";
import { categories } from "@/app/components/constants/Products";
 
const useStyles = makeStyles((theme: any) => ({
   container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh", // Ensure the container takes full viewport height
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
   content: {
      flex: 1, // Allow content to take up remaining space vertically
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start", // Adjusted to align items at the top
      width: "100%", // Ensure content fills the width of the container
      maxWidth: "960px", // Adjust as needed
      padding: theme.spacing(2), // Adjust spacing as needed
      [theme.breakpoints.down('lg')]: {
         minWidth: '150vh', // Adjust minWidth for phone screens
       },
      [theme.breakpoints.down('sm')]: {
        minWidth: '50vh', // Adjust minWidth for phone screens
      }, 
   },
 }));

const ProductStore = ({
   openCart,
   setOpenCart,
   cart, 
   setCart,
   numberOfItems
}: {
   openCart: boolean;
   numberOfItems: number;
   setOpenCart: (b: boolean) => void;
      cart: Cart,
      setCart: (c: Cart) => void,
}) => {

   const classes = useStyles()
   const [category, setCategory] = useState(categories[0])
   const [product, setProduct] = useState<MyProduct | null>(null)

   return (
      <Container className={classes.container}
      style={{
         display: "flex",
         flexDirection: "column",
         alignItems: "center",
         justifyContent: "center",
         minHeight: "100vh", // Ensure the container takes full viewport height
         minWidth: '100vh', // Default minWidth for large screens
         
       }}
      >
      <AppAppBar numberOfItems={numberOfItems} openCart={openCart} setOpenCart={setOpenCart}/>
            <div className={classes.content}
            style={{
               flex: 1, // Allow content to take up remaining space vertically
               display: "flex",
               flexDirection: "column",
               alignItems: "center",
               justifyContent: "flex-start", // Adjusted to align items at the top
               width: "100%", // Ensure content fills the width of the container
               maxWidth: "960px", // Adjust as needed
               padding: 2, // Adjust spacing as needed
               
            }}>
         <Input />
         <Categories 
         categories={categories}
         category={category} 
         setCategory={setCategory}
         setProduct={setProduct}
         />
         {product === null && <ItemList cart={cart}
         setCart={setCart}
         category={category} setProduct={setProduct} 
         />}
         {product && <SingleProductPage 
          cart={cart}
          setCart={setCart}
          item={product} setProduct={setProduct} />}
          
         <ScrollBtn />
         </div>
      </Container>
   );
};

export default ProductStore;

