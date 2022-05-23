import React,{useState,useEffect} from "react"
import { PlayerFilter } from "../components/player/PlayerFilter"
import {PlayerList} from '../components/player/PlayerList'
export const ChooseMyTeamPage = ({players,teams}) => {
  const [myPlayers,setMyPlayers]=useState([])
  const [search,setSearch]=useState('')
  const [selectedTeam,setSelectedTeam]=useState('All')
  const [selectedPosition,setSelectedPosition]=useState('All')

  const fetchMyPlayers=async ()=>{
    try{
      const resp= await fetch(' http://localhost:3001/myTeam')
      const data= await resp.json()
      setMyPlayers(data)
    }catch(error){
      alert(error)
    }
  }
  useEffect(()=>{
    fetchMyPlayers()
  },[]);

  function addPlayerMyTeam(addedPlayer){
    fetch("http://localhost:3001/myTeam", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(addedPlayer),
  })
    .then((r) => r.json())

    setMyPlayers([...myPlayers,addedPlayer])
  }
  function removePlayerMyTeam(removedPlayer){
    const updatedMyTeam = myPlayers.filter((player) => player.id !== removedPlayer.id);
    setMyPlayers(updatedMyTeam)
    fetch(`http://localhost:3001/myTeam/${removedPlayer.id}`, {
    method: "DELETE",
    })
    .then((r) => r.json())
    
  }

  function handleSearchChange(event){
    setSearch(event.target.value)
  }
  function handleSelectTeam(team){
    setSelectedTeam(team)
  }
  function handlePositionChange(e){
    setSelectedPosition(e.target.value)
  }
  const shownPlayers=players
  .filter(player=>player.strPlayer.includes(search)) 
  .filter(player=>{
    if(selectedTeam==='All') return true;
    return selectedTeam===player.strTeam
  })
  .filter(player=>{
    if(selectedPosition==='All') return true;
    return selectedPosition===player.strPosition
  })
  return (
    <div>
      <PlayerFilter 
        teams={teams} 
        search={search} 
        onSearchChange={handleSearchChange} 
        onTeamSelect={handleSelectTeam}
        onPositionChange={handlePositionChange}
      />
      <div style={{display:'flex'}}>
        <PlayerList 
          players={shownPlayers}
          playerKey={'id'} 
          title={'All Players'} 
          playerButton={'Add to  My Team'}
          onPlayerClick={addPlayerMyTeam}
          interactive={true}
        />
        <PlayerList 
          players={myPlayers} 
          playerKey={'idPlayer'}
          playerButton={'Remove from My Team'} 
          title={'My Team'} 
          onPlayerClick={removePlayerMyTeam}
          interactive={true}
        />
      </div>
    </div>
  )
}
