import React from "react"
export const TeamCard = ({team,onShowRoster}) => {
  function onTeamClick(){
    onShowRoster(team)
  }
  return (
    <div style={{margin:'auto'}} onClick={onTeamClick}>
      <h2>{team.strTeam}</h2>
      <h4>{team.strStadiumLocation}</h4>
      <img src={team.strTeamBanner} alt={`${team.strTeam}`}/>
      <p>{team.strDescriptionEN}</p>
    </div>
  )
}
