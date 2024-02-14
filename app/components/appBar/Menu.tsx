import React from "react";
import { makeStyles, Grid, Typography } from "@material-ui/core";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
   root: {
      position: "fixed",
      top: 56,
      [`${theme.breakpoints.up("xs")} and (orientation: landscape)`]: {
         top: 48,
      },
      [theme.breakpoints.up("sm")]: {
         top: 64,
      },
      left: 0,
      backgroundColor: theme.palette.primary.light,
      display: "flex",
      height: "100vh",
      [theme.breakpoints.up("md")]: {
        //  display: "none",
      },
      zIndex: 999,
   },
   navLinks: {
      alignItems: "center",
      justifyContent: "center",
      marginBottom: theme.spacing(4),
   },
   linkText: {
      marginTop: theme.spacing(2),
      textAlign: "left",
   },
   close: {
      position: "absolute",
      top: 20,
      right: 20,
   },
   whiteText: {
      color: "#fff",
   },

   link: {
      transition: "0.3s all ease-in-out",
      "&:hover": {
         marginLeft: theme.spacing(1),
      },
      color: "#fff",
      textDecoration: "none",
   },
}));

const Menu = ({setMenuOpen}:{setMenuOpen: (a: boolean) => void}) => {
   const classes = useStyles();
   return (
      <Grid component="aside" item container xs={12} className={classes.root}>
         <Grid item container direction="column" className={classes.navLinks}>
            <Grid>
               <Link href="/">
               <Typography
                  variant="h1"
                  color="inherit"
                  className={classes.linkText}
                  onClick={() => setMenuOpen(false)}
               >
                     Home
               </Typography>
               </Link>
               <Link href="/store">
               <Typography
                  variant="h1"
                  color="inherit"
                  className={classes.linkText}
                  onClick={() => setMenuOpen(false)}
               >
                  
                     Store
               </Typography>
               </Link>
               <Link href="/store/about">
               <Typography
                  variant="h1"
                  color="inherit"
                  className={classes.linkText}
                  onClick={() => setMenuOpen(false)}

               >
                     About
               </Typography>
               </Link>
            </Grid>
         </Grid>
      </Grid>
   );
};

export default Menu;