import React from "react";
import { Card, CardMedia, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: any) => ({
    image: {
      width: '100%', // large screen
      height: 'auto',
    },
    
 }));

const CarouselSlide = ({img}: {img: string}) => {
  const classes = useStyles()
  return (
    <Card style={{
      minWidth: 200,
      position: 'relative'
      }}>
    <CardMedia component="img" src={img} 
    className={classes.image}
     />
  </Card>
  );
};

export default CarouselSlide;
