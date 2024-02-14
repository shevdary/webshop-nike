import React, { useState } from "react";
import { makeStyles, alpha, InputBase, Grid, InputAdornment, TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { Box } from "@mui/material";

const useStyles = makeStyles((theme) => ({
   container: {
      justifyContent: "center",
      marginTop: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
         marginTop: theme.spacing(0.5),
      },
   },
   search: {
      display: "flex",
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      backgroundColor: alpha(theme.palette.primary.light, 0.35),
      transition: "0.3s all ease-in-out",
      "&:hover": {
         // backgroundColor: alpha(theme.palette.primary.light, 0.55),
      },
      width: "100%",
      [theme.breakpoints.up("sm")]: {
         height: theme.spacing(6),
         maxWidth: 600,
      },
   },
   inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
   },
}));

const Input = () => {
   const classes = useStyles();
    const [searchValue, setSearchValue] = useState('')

   return (
      <Grid container className={classes.container}>
         <div className={classes.search}>
               <TextField
          placeholder="Find Item"
          InputProps={{
            startAdornment: <InputAdornment position="end"><Box sx={{mt: 2}}><SearchIcon/></Box></InputAdornment>,
          }}
         //  variant="filled"
          onChange={(e) => e && e.target.value && setSearchValue(e.target.value)}
        />
         </div>
      </Grid>
   );
};

export default Input;