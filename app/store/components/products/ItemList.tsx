import React from "react";
import {
   CircularProgress,
   makeStyles,
   Grid,
   Button,
   Typography,
} from "@material-ui/core";
import { SingleProduct} from "./SingleItem";
import { Cart, MyProduct } from "@/app/components/constants/types";
import { sneakers, running, products } from "@/app/components/constants/Products";


const mapThroughItems = (cart: Cart, items: MyProduct[], setCart: (c: Cart) => void, setProduct: (a: MyProduct | null) => void ) => {

   return items.map((item: any, idx) => {
      return <SingleProduct key={idx} item={item} setProduct={setProduct}
      cart={cart}
      setCart={setCart}
      />;
   });
};

const useStyles = makeStyles((theme) => ({
   container: {
      display: "flex",
      justifyContent: "center",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: theme.spacing(0.5),
      marginBottom: theme.spacing(10),
   },
   progress: {
      padding: theme.spacing(10),
   },
   marginTopTwo: {
      marginTop: theme.spacing(2),
   },
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
   const classes = useStyles();
   const items = returnCategory(category)
   const pending = false
   return (
      <>
         {!pending && items.length > 0 ? (
            <Grid
               className={classes.container}
               container
               item
               spacing={4}
               xs={10}
               sm={8}
            >
               {mapThroughItems(cart, items, setCart, setProduct)}
            </Grid>
         ) : !pending && items.length === 0 ? (
            <Grid
               className={classes.container}
               direction="column"
               alignItems="center"
               container
               item
            >
               <Typography variant="h4" color="initial">
                  No Items Found
               </Typography>
               <Button
                  color="primary"
                  variant="contained"
                  className={classes.marginTopTwo}
               >
                  Back to home
               </Button>
            </Grid>
         ) : (
            <Grid
               className={classes.container}
               container
            >
               <CircularProgress size="5rem" />
            </Grid>
         )}
      </>
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