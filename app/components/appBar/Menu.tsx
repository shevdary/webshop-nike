import React from "react";
import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Link from "next/link";

const NavRoot = styled(Grid)(({ theme }) => ({
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
   zIndex: 999,
}));

const NavLinks = styled(Grid)(({ theme }) => ({
   alignItems: "center",
   justifyContent: "center",
   marginBottom: theme.spacing(4),
}));

const LinkText = styled(Typography)(({ theme }) => ({
   marginTop: theme.spacing(2),
   textAlign: "left",
}));

const Menu = ({ setMenuOpen }: { setMenuOpen: (a: boolean) => void }) => {
   return (
     <NavRoot item container xs={12}>
        <NavLinks item container direction="column">
           <Grid item>
              <Link href="/">
                 <LinkText
                   variant="h1"
                   color="inherit"
                   onClick={() => setMenuOpen(false)}
                 >
                    Home
                 </LinkText>
              </Link>
              <Link href="/store">
                 <LinkText
                   variant="h1"
                   color="inherit"
                   onClick={() => setMenuOpen(false)}
                 >
                    Store
                 </LinkText>
              </Link>
              <Link href="/store/about">
                 <LinkText
                   variant="h1"
                   color="inherit"
                   onClick={() => setMenuOpen(false)}
                 >
                    About
                 </LinkText>
              </Link>
           </Grid>
        </NavLinks></NavRoot>
   );
};

export default Menu;
