import React from "react";
import {
   makeStyles,
   Card,
   CardMedia,
   Grid,
   Typography,
   CardActionArea,
   CardContent,
   Button,
} from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Cart, MyProduct } from "@/app/components/constants/types";
import { addToCart } from "../cart/functions";


const useStyles = makeStyles((theme) => ({
   root: {
      minWidth: '50%',
     maxWidth: '50%', // Ensure the card takes up the full width
     [theme.breakpoints.up("sm")]: {
       maxWidth: 150, // Set max width for larger screens
     },
   },
   media: {
     height: 140, // Default height for small screens
     [theme.breakpoints.up("sm")]: {
       height: 100, // Adjusted height for larger screens
     },
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
   setProduct: (a: MyProduct| null) => void 
}) => {
   const classes = useStyles();
   
   const { price, img, name } = item;

   return (
      <Grid item xs={12} sm={6} lg={3} container justifyContent="center"> {/* Center items on mobile screens */}
         <Card className={classes.root}>
            <CardActionArea onClick={() => setProduct(item)}>
               <CardMedia
                  className={classes.media}
                  style={{
                     height: 140
                  }}
                  src={img[0]}
                  title={name}
                  component="img"
                  loading="lazy"
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
            <Button variant="contained" onClick={() => addToCart(setCart, cart, item)}>
               <ShoppingCartIcon />+
            </Button>
         </Card>
      </Grid>
   );
};

