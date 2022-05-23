import React,{useState} from 'react'

export const PlayerFilter = ({teams,search,onSearchChange,onTeamSelect,onPositionChange}) => {
    const [selectedTeam,setSelectedTeam]=useState('')

    function handleTeamClick(team){
        setSelectedTeam(team)
        onTeamSelect(team)
    }

    const teamList=teams.map(team=>team.strTeam)
    const buttonList=teamList.map((team)=>(
        <button key={team} className={selectedTeam===team?'selected':null} onClick={()=>handleTeamClick(team)}>{team}</button>
    ))
  return (
    <div>
        <label>
            <strong>Search Player Name:</strong>
            <input type="text" name="search" value={search} onChange={onSearchChange} placeholder="Search..." />
        </label>
        <br/>
        <label>
        <strong>Select Player Position:</strong>
        <select onChange={onPositionChange}>
        <option value="All">All</option>
          <option value="Forward">Forward</option>
          <option value="Midfielder">Midfielder</option>
          <option value="Defender">Defender</option>
          <option value="Goalkeeper">Goalkeeper</option>
        </select>
      </label>
        <br />
        <label>
            <button className={selectedTeam==='All'?'selected':null} onClick={()=>handleTeamClick('All')}>Show All</button>
            {buttonList}
        </label>
    </div>
  )
}
