import React,{useState} from 'react'

export const PlayerFilter = ({teams,search,onSearchChange,onTeamSelect}) => {
    const [selectedTeam,setSelectedTeam]=useState('')

    function handleClick(team){
        setSelectedTeam(team)
        onTeamSelect(team)
      }

    const teamList=teams.map(team=>team.strTeam)
    const buttonList=teamList.map((team)=>(
        <button key={team} className={selectedTeam===team?'selected':null} onClick={()=>handleClick(team)}>{team}</button>
      ))
  return (
    <div>
        <label>
            <strong>Search Player Name:</strong>
            <input type="text" name="search" value={search} onChange={onSearchChange} placeholder="Search..." />
        </label>
        <label>
            <button className={selectedTeam==='All'?'selected':null} onClick={()=>handleClick('All')}>Show All</button>
            {buttonList}
        </label>
    </div>
  )
}
