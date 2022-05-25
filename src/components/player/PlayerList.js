import React from "react";
import {PlayerCard} from './PlayerCard'
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent:'center',
  }
}));
export const PlayerList = ({players,title,onPlayerClick,playerButton,interactive}) => {
  const classes = useStyles();

  const playerCards=players.map(player=> <PlayerCard key={player.idPlayer} player={player} onPlayerClick={onPlayerClick} playerButton={playerButton} interactive={interactive}/>)
  return (
    <Grid className={classes.root}>
      <h2>{title}</h2>
      {playerCards}
    </Grid>
  )
}
 