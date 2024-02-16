import React, {FC} from "react";
import { Fab, styled, useScrollTrigger, Zoom } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Link from "next/link";

const ScrollTopRoot = styled("div")(({ theme }) => ({
  position: "fixed",
  bottom: theme.spacing(4),
  right: theme.spacing(4),
}));

const ScrollTop: FC<{children?: React.ReactNode, window?: Window}> = (props) => {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLInputElement>) => {
    const target = event.target as HTMLElement;
    const anchor = (target.ownerDocument || document).querySelector(
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

const ScrollBtn:FC<{children?: React.ReactNode, window?: Window}> = (props) => {
  return (
    <ScrollTop {...props}>
      <Fab color="primary" size="small" aria-label="scroll back to top">
        <KeyboardArrowUpIcon />
      </Fab>
    </ScrollTop>
  );
};

export default ScrollBtn;
