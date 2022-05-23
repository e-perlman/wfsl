import React,{useState} from "react"
import {TeamList} from '../components/player/TeamList'
import {PlayerList} from '../components/player/PlayerList'
export const TeamsPlayersPage = ({teams,players}) => {
  const [showTeam,setShownTeam]=useState('')

  function handleShowRoster(team){
      setShownTeam(team.idTeam)
  }
  const shownPlayers=players
    .filter(player=>{
      if (showTeam===player.idTeam) return true;
      return false;
    })
  return (
    <div style={{display:'flex'}}>
      <TeamList teams={teams} onShowRoster={handleShowRoster}/>
      <PlayerList players={shownPlayers}/>
    </div>
  )
}
