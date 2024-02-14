import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { Fab } from "@mui/material";
import React from "react";

interface ArrowProps {
  direction: "left" | "right";
  handleClick: () => void;
}

const Arrow: React.FC<ArrowProps> = ({ direction, handleClick }) => {
  return (
    <Fab
      style={{
        padding: "2em",
        backgroundColor: "unset",
        boxShadow: "unset",
        border: "1px solid",
      }}
      onClick={handleClick}
    >
      {direction === "right" ? <ArrowRight/> : <ArrowLeft />}
    </Fab>
  );
};

export default Arrow;
