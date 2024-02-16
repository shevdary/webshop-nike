import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  Grid,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Button,
  Fade,
  styled, Collapse,
} from "@mui/material";
import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";
import { ShopName } from "../constants/Texts";
import Menu from "./Menu";

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  marginRight: theme.spacing(0.5),
  maxWidth: '120px', // Adjust the maximum width as needed
  width: '100%', // Set width to 100% initially
  [theme.breakpoints.up("md")]: {
    marginRight: theme.spacing(2),
    maxWidth: 'none', // Reset maxWidth for larger screens
    width: 'auto', // Allow button to grow to its content width
  },
}));

const StyledTypography = styled(Typography)({
  color: "#fff",
  textDecoration: "none",
  cursor: "pointer",
});

const AppAppBar = ({
                     openCart,
                     setOpenCart,
                     numberOfItems,
                   }: {
  numberOfItems: number;
  openCart: boolean;
  setOpenCart?: (b: boolean) => void;
}) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <AppBar>
        <Toolbar id="back-to-top-anchor">
          <Grid container alignItems="center">
            <Grid item>
              <StyledIconButton
                edge="start"
                color="inherit"
                onClick={() => setMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <CloseIcon sx={{ color: "#fff" }} />
                ) : (
                  <MenuIcon />
                )}
              </StyledIconButton>
            </Grid>
            <Grid item>
              <Link href="/">
                <StyledTypography
                  variant="h4"
                  translate="no"
                  style={{ fontFamily: "Meow Script, cursive", color: "black" }}
                >
                  {ShopName}
                </StyledTypography>
              </Link>
            </Grid>
            <Grid item>
              <Button
                variant="text"
                onClick={() => setOpenCart && setOpenCart(!openCart)}
              >
                <Badge badgeContent={numberOfItems} color="secondary">
                  <ShoppingCartIcon sx={{ color: "#000" }} />
                </Badge>
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      {isMenuOpen && (
        <Collapse in={isMenuOpen}>
          <Menu setMenuOpen={setMenuOpen} />
        </Collapse>
      )}
    </>
  );
};

export default AppAppBar;
