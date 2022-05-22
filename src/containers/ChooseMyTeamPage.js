import React,{useState} from "react"
import { PlayerFilter } from "../components/player/PlayerFilter"
import {PlayerList} from '../components/player/PlayerList'
export const ChooseMyTeamPage = ({players}) => {
  const [myPlayers,setMyPlayers]=useState([])
  const [search,setSearch]=useState('')

  function addPlayerMyTeam(addedPlayer){
    setMyPlayers([...myPlayers,addedPlayer])
  }

  function handleSearchChange(event){
    setSearch(event.target.value)
  }
  const shownPlayers=players
  .filter(player=>player.strPlayer.includes(search)) 
  return (
    <div>
      <PlayerFilter search={search} onSearchChange={handleSearchChange}/>
      <div style={{display:'flex'}}>
        <PlayerList players={shownPlayers} title={'All Players'} onPlayerClick={addPlayerMyTeam}/>
        <PlayerList players={myPlayers} title={'My Team'} />
      </div>
    </div>
  )
}
