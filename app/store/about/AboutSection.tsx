
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Store | EquisMate",
};

import React, { useEffect, useState } from "react";
import { Container, Paper, Typography, makeStyles } from "@material-ui/core";
import AppAppBar from "@/app/components/appBar";
import { Cart } from "@/app/components/constants/types";
import { aboutText, brand } from "@/app/components/constants/Texts";
import { Stack } from "@mui/material";
 
const useStyles = makeStyles((theme: any) => ({
    paper: {
        marginTop: 10,
        minHeight: "25vh", //full screen
        minWidth: "50vh", //full screen
        display: "flex",
        flexDirection: "column", 
        justifyContent: "center",
        alignItems: "center",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: theme.spacing(2),
    },
   container: {
     display: "flex",
     flexDirection: "column",
     alignItems: "center",
     justifyContent: "center",
     minHeight: "100vh", // Ensure the container takes full viewport height
   },
   mainText: {
    fontFamily: "Meow Script, cursive",
            marginBottom: 2,
            maxWidth: 375,
            marginLeft: 30,
            fontSize: "2rem",
   },
   content: {
      flex: 1, // Allow content to take up remaining space vertically
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start", // Adjusted to align items at the top
      width: "100%", // Ensure content fills the width of the container
      maxWidth: "960px", // Adjust as needed
      padding: theme.spacing(2), 
    },
 }));

const AboutSection = ({
   openCart,
   setOpenCart,
   numberOfItems
}: {
   openCart: boolean;
   numberOfItems: number;
   setOpenCart: (b: boolean) => void;
}) => {

   const classes = useStyles()
   
   return (
      <Container className={classes.container}>
      <AppAppBar
 numberOfItems={numberOfItems}      
  openCart={openCart}
      setOpenCart={setOpenCart}
      />
            <div className={classes.content}>
               <Stack 
               style={{marginTop: 50}}
               direction="column">
         <Typography className={classes.mainText}>
            About {brand}
         </Typography>
         <Typography className={classes.mainText}>
         {aboutText()}
         </Typography>
         </Stack>
         <Paper 
         className={classes.paper}
         style={{
                  backgroundImage: 'url(/Founders.png)'
         }}>
            
         </Paper>
         </div>
      </Container>
   );
};

export default AboutSection;

