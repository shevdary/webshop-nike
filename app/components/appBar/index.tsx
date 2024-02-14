"use client"
import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import {
   Grid,
   makeStyles,
   Typography,
   AppBar,
   Toolbar,
   IconButton,
   Badge,
   Button,
   Fade,
} from "@material-ui/core";
import Link from "next/link";
import CloseIcon from "@material-ui/icons/Close";
import { ShopName } from "../constants/Texts";
import Menu from "./Menu";

const useStyles = makeStyles((theme) => ({
   root: {
      [theme.breakpoints.up("lg")]: {
         paddingLeft: 96,
         paddingRight: 96,
      },
      overflow: "hidden",
      position: "relative",
   },
   logo: {
      fontFamily: "Meow Script, cursive",
   },
   btnContainer: {
      display: "flex",
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      color: "#fff",
   },
  menuButton: {
    marginRight: theme.spacing(0.5),
    maxWidth: '120px', // Adjust the maximum width as needed
    width: '100%', // Set width to 100% initially
  
    [theme.breakpoints.up("md")]: {
      marginRight: theme.spacing(2),
      maxWidth: 'none', // Reset maxWidth for larger screens
      width: 'auto', // Allow button to grow to its content width
      // Remove display: none for larger screens
    },
  },
   link: {
      color: "#fff",
      textDecoration: "none",
      cursor: "pointer",
   },
   flex: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
   },
   flexEnd: {
      justifyContent: "flex-end",
   },
   spaceAround: {
      justifyContent: "space-around",
   },

   marginLeftOne: {
      marginLeft: theme.spacing(1),
   },

   marginRightThree: {
      marginRight: theme.spacing(3),
   },
   marginRightFour: {
      marginRight: theme.spacing(1),
      [theme.breakpoints.up("sm")]: {
         marginRight: theme.spacing(4),
      },
   },
   letterSpace: {
      letterSpacing: 2,
   },
   letterSpace2: {
      letterSpacing: 1.2,
   },
   whiteText: {
      color: "#fff",
   },
   hideMobile: {
      display: "none",
      [theme.breakpoints.up("md")]: {
         display: "flex",
      },
   },
   hideMini: {
      display: "none",
      [theme.breakpoints.up("sm")]: {
         display: "flex",
      },
   },
   transition: {
      transition: "0.3s all ease-out",
      "&:hover": {
         transform: "Scale(1.1)",
      },
   },
}));

const AppAppBar = ({
   openCart,
   setOpenCart,
   numberOfItems,
}: {
   numberOfItems: number;
   openCart: boolean;
   setOpenCart?: (b: boolean) => void;
}
) => {
   const classes = useStyles();
    const [isMenuOpen, setMenuOpen] = useState(false)

    return (
      <>
         <AppBar >
            <Toolbar id="back-to-top-anchor">
               <Grid container alignItems="center"> {/* Ensure items are aligned vertically */}
                  <Grid item>
                     <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        onClick={() => setMenuOpen(!isMenuOpen)}
                     >
                        {isMenuOpen ? <CloseIcon className={classes.whiteText} /> : <MenuIcon />}
                     </IconButton>
                  </Grid>
                  <Grid item>
                     <Link href="/">
                        <Typography
                           style={{fontFamily: "Meow Script, cursive", color: 'black'}}
                           variant="h4"
                           translate="no"
                        >
                           {ShopName}
                        </Typography>
                     </Link>
                  </Grid>
                  <Grid item>
                        <Button
                           variant="text"
                           onClick={() => setOpenCart && setOpenCart(!openCart)}
                        >
                           <Badge badgeContent={numberOfItems} color="secondary">
                              <ShoppingCartIcon />
                           </Badge>
                           
                        </Button>
                  </Grid>
                  
               </Grid>
            </Toolbar>
         </AppBar>
         {isMenuOpen && (
            <Fade in={isMenuOpen}>
               <Menu setMenuOpen={setMenuOpen}/>
            </Fade>
         )}
      </>
   );
};



export default AppAppBar;