import React from "react";
import {
   Grid,
   Typography,
   makeStyles,
   Button,
   alpha,
   Chip,
} from "@material-ui/core";
import { Cart, MyProduct } from "@/app/components/constants/types";
import { ImageSlider } from "../slider/Image";
import { addToCart } from "../cart/functions";

const useStyles = makeStyles((theme) => ({
   container: {
      padding: theme.spacing(4),
      justifyContent: "space-around",
      height: "auto",
      alignItems: "center",
      [theme.breakpoints.up("md")]: {
         padding: theme.spacing(10),
      },
   },
   imgContainer: {
      width: "100%",
      height: "auto",
      boxShadow: theme.shadows[3],
   },
   marginTopTwo: {
      marginTop: theme.spacing(0.5),
      color: 'black',
   },
   paleText: {
      color: alpha("#333", 0.8),
   },
   letterSpace: {
      letterSpacing: 2.5,
   },
}));

const SingleProductPage = ({
   item, setProduct,
cart,
setCart
}: {
   cart: Cart,
   setCart: (c: Cart) => void,
   item: MyProduct, 
   setProduct: (a: MyProduct | null) => void
}) => {
   
   const classes = useStyles();
   const { description, price, name, category } = item;

   const handleClick = () => {
      addToCart(setCart, cart, item)
   }

   return (
      <Grid container className={classes.container}
      style={{backgroundColor: 'white'}}
      >
         <Grid item xs={3} sm={3}></Grid>
         <Grid item xs={6} sm={6}>
            <Button 
            style={{borderRadius: 28}}
            variant="outlined"
            onClick={() => setProduct(null)}
            >
               {`< Back`}
            </Button>
         </Grid>
         <Grid item xs={3} sm={3}></Grid>
         <Grid item xs={12} sm={4}>
            <div className={classes.imgContainer}>
               <ImageSlider item={item}
                />
            </div>
         </Grid>
         <Grid item xs={12} sm={6}>
            <Typography className={classes.marginTopTwo} variant="h4">
               {name}
            </Typography>
            <Chip
               label={category}
               variant="outlined"
               className={classes.marginTopTwo}
            />
            <Typography
               className={classes.paleText}
               variant="body1"
            >
               {description}
            </Typography>
            <Typography className={classes.marginTopTwo} variant="subtitle2">
            €{price}
            </Typography>

            <Button
               className={classes.letterSpace}
               fullWidth
               variant="contained"
               color="primary"
               disabled={false}
               onClick={handleClick}
            >
               Add to Cart
            </Button>
         </Grid>
      </Grid>
   );
};

export default SingleProductPage;