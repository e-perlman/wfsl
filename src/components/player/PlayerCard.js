import React from "react"
export const PlayerCard = ({player,onPlayerClick}) => {
  function handleClick(){
    onPlayerClick(player)
  }
  return (
    <div onClick={handleClick}>
      <h2>{player.strPlayer}</h2>
      <h4>Team: {player.strTeam}</h4>
      <h4>Position: {player.strPosition}</h4>
      <img src={player.strThumb} alt={`${player.strPlayer}`}/>
      <p>{player.strDescriptionEn}</p>
    </div>
  )
}
