import { Typography } from '@mui/material';
import React from 'react';
import { PlayerList } from './PlayerList'
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    root: {
      justifyContent:'center',
      marginLeft: "auto",
      marginRight:"auto",
      
    },
    description:{
        justifyContent:'center',
        marginLeft: "auto",
        marginRight:"auto",
    }
  }));
export const TeamPage = ({players,team}) => {
    
    const classes = useStyles();
  return (
    <div className={classes.root}>
        <img src={team.strTeamBanner} alt={team.strTeam}></img>
        <Typography variant='h2' component='div'>{team.strTeam}</Typography>
        <div style={{maxWidth:'50%',margin:'0 auto',float:'none'}}>
            <Typography variant="body2" color="text.secondary" className={classes.description}>
                {team.strDescriptionEN}
            </Typography>
        </div>
         <Typography variant='h4' component='div'>Team Roster</Typography>
        <PlayerList players={players} interactive={false}></PlayerList>
    </div>
  )
}
