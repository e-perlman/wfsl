import { Typography } from '@mui/material';
import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router-dom'
import { PlayerList } from './PlayerList'
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    root: {
      justifyContent:'center',
      marginLeft: "auto",
      marginRight:"auto",
      
    }
  }));
export const TeamPage = ({players,teams}) => {
  const [showTeam,setShowTeam]=useState({})
    const {teamName}=useParams()

    const fetchTeams=async ()=>{
      try{
        const resp= await fetch(`http://localhost:3001/teams?strTeam=${teamName}`)
        const data= await resp.json()
        setShowTeam(data[0])
      }catch(error){
        alert(error)
      }
    }
    useEffect(()=>{
      fetchTeams()
    },[]);

    const shownPlayers=players
    .filter(player=>{
      if (showTeam.idTeam===player.idTeam) return true;
      return false;
    })
    const classes = useStyles();
 
  return (
    <div className={classes.root}>
        <img src={showTeam.strTeamBanner} alt={showTeam.strTeam}></img>
        <Typography variant='h2' component='div'>{showTeam.strTeam}</Typography>
        <div style={{maxWidth:'50%',margin:'0 auto',float:'none'}}>
            <Typography variant="body2" color="text.secondary" className={classes.root}>
                {showTeam.strDescriptionEN}
            </Typography>
        </div>
         <Typography variant='h4' component='div'>Team Roster</Typography>
        <PlayerList players={shownPlayers} interactive={false}></PlayerList>
    </div>
  )
}
