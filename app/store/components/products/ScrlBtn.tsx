import React from "react";
import { Fab, styled, useScrollTrigger, Zoom } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Link from "next/link";

const ScrollTopRoot = styled("div")(({ theme }) => ({
  position: "fixed",
  bottom: theme.spacing(4),
  right: theme.spacing(4),
}));

const ScrollTop = (props) => {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "body",
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Zoom in={trigger}>
      <Link href="#">
        <ScrollTopRoot onClick={handleClick} role="presentation">
          {children}
        </ScrollTopRoot>
      </Link>
    </Zoom>
  );
};

const ScrollBtn = (props) => {
  return (
    <ScrollTop {...props}>
      <Fab color="primary" size="small" aria-label="scroll back to top">
        <KeyboardArrowUpIcon />
      </Fab>
    </ScrollTop>
  );
};

export default ScrollBtn;
