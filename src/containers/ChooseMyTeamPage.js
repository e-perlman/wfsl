import React,{useState} from "react"
import { PlayerFilter } from "../components/player/PlayerFilter"
import {PlayerList} from '../components/player/PlayerList'
export const ChooseMyTeamPage = ({players,teams}) => {
  const [myPlayers,setMyPlayers]=useState([])
  const [search,setSearch]=useState('')
  const [selectedTeam,setSelectedTeam]=useState('All')

  function addPlayerMyTeam(addedPlayer){
    setMyPlayers([...myPlayers,addedPlayer])
  }

  function handleSearchChange(event){
    setSearch(event.target.value)
  }
  function handleSelectTeam(team){
    setSelectedTeam(team)
  }
  const shownPlayers=players
  .filter(player=>player.strPlayer.includes(search)) 
  .filter(player=>{
    if(selectedTeam==='All') return true;
    return selectedTeam===player.strTeam
  })
  return (
    <div>
      <PlayerFilter teams={teams} search={search} onSearchChange={handleSearchChange} onTeamSelect={handleSelectTeam}/>
      <div style={{display:'flex'}}>
        <PlayerList players={shownPlayers} title={'All Players'} onPlayerClick={addPlayerMyTeam}/>
        <PlayerList players={myPlayers} title={'My Team'} />
      </div>
    </div>
  )
}
