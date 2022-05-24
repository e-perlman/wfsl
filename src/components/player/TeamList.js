import { Grid } from "@mui/material"
import React from "react"
import {TeamCard} from './TeamCard'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    },
    justifyContent:'center',
    display:'flex',
    flexWrap:'wrap'
  }
}));
export const TeamList = ({teams,onShowRoster}) => {
  const classes = useStyles();
  const teamCards=teams.map(team=> <TeamCard key={team.idTeam} team={team} onShowRoster={onShowRoster}/>)
  return (
    <Grid className={classes.root}>
      {teamCards}
    </Grid>
  )
}
