import React from "react"
export const PlayerCard = ({player,onPlayerClick,playerButton}) => {
  function handleClick(){
    onPlayerClick(player)
  }
  return (
    <div>
      <h2>{player.strPlayer}</h2>
      <h4>Team: {player.strTeam}</h4>
      <h4>Position: {player.strPosition}</h4>
      <br/>
      <button onClick={handleClick}>{playerButton}</button>
      <br/>
      <img src={player.strThumb} alt={`${player.strPlayer}`}/>
    </div>
  )
}
