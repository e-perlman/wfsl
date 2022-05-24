import React from "react"
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

export const PlayerCard = ({player,onPlayerClick,playerButton,interactive}) => {
  function handleClick(){
    onPlayerClick(player)
  }
  const classes = useStyles();
  return (
      <Card className={classes.root}>
        <CardContent style={{justifyContent:'center'}}>
            <Typography gutterBottom variant="h4" component="div">
                {player.strPlayer}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
                Team: {player.strTeam}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
                Position: {player.strPosition}
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            className={classes.media}
            image={player.strThumb}
            alt={`${player.strPlayer}`}
          />
        <CardActions className={classes.button}>
          {interactive?<Button onClick={handleClick}>{playerButton}</Button>:null}
        </CardActions>
   </Card>
  )
}
