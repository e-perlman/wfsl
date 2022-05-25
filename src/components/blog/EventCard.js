import React from 'react'
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { Button,CardActions } from '@mui/material';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: 500,
    justifyContent:'center'
  },
  media: {
    display: "block",
    marginLeft: "auto",
    marginRight:" auto",
    height: "150px",
    width: 'auto'
  },
  button:{
    justifyContent:'center',
    margin:'0 auto',
    float:'none'
  }
});

export const EventCard = ({game}) => {
  const classes = useStyles();
  return (
      <Card className={classes.root}>
        <CardContent style={{justifyContent:'center'}}>
          <Typography gutterBottom variant="h5" component="div">{ game.strEvent} </Typography>
          <Typography gutterBottom variant="h6" component="div"> Time: {game.strTime} </Typography>
          <Typography gutterBottom variant="h6" component="div"> Venue: {game.strVenue} </Typography>
          <Typography gutterBottom variant="h6" component="div"> Home Team: {game.strHomeTeam} </Typography>
          <Typography gutterBottom variant="h6" component="div"> Away Team: {game.strAwayTeam} </Typography>
          <Typography gutterBottom variant="h6" component="div"> Score: {game.intHomeScore}-{game.intAwayScore}</Typography>
        </CardContent>
      </Card>
  )
}
