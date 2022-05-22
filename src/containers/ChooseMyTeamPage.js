import React,{useState} from "react"
import {PlayerList} from '../components/player/PlayerList'
export const ChooseMyTeamPage = ({players}) => {
  const [myPlayers,setMyPlayers]=useState([])
  function addPlayerMyTeam(addedPlayer){
    setMyPlayers([...myPlayers,addedPlayer])
  }
  return (
    <div style={{display:'flex'}}>
      <PlayerList players={players} title={'All Players'} onPlayerClick={addPlayerMyTeam}/>
      <PlayerList players={myPlayers} title={'My Team'} />
    </div>
  )
}
