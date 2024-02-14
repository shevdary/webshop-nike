"use client"
import React from "react";
import { Button, Grid, makeStyles } from "@material-ui/core";
import { MyProduct } from "@/app/components/constants/types";

const useStyles = makeStyles((theme) => ({
   container: {
      justifyContent: "center",
      marginTop: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
         marginTop: theme.spacing(0.5),
      },
   },
   padding: {
      padding: theme.spacing(1),
   },
   letterSpace: {
      letterSpacing: 3,
   },
}));

const Categories = ({
   category, 
   setCategory, 
   categories,
   setProduct
}: {
   setProduct: (a: MyProduct | null) => void;
   categories: string[];
   category: string; 
   setCategory: (a: string) => void
}) => {
   const classes = useStyles();
   return (
      <Grid container className={classes.container}>
         {categories.map((cat, idx) => (
            <Grid item key={idx} className={classes.padding}>
               <Button
                  size="small"
                  color="primary"
                  variant={cat === category ? "outlined" : "contained"}
                  onClick={() => {
                     setProduct(null);
                     setCategory(cat)
                  }}
                  className={classes.letterSpace}
               >
                  {cat}
               </Button>
            </Grid>
         ))}
      </Grid>
   );
};

export default Categories;