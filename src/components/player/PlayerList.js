import React from "react";
import {PlayerCard} from './PlayerCard'
export const PlayerList = ({players,title,onPlayerClick,playerButton}) => {
    const playerCards=players.map(player=> <PlayerCard key={player.idPlayer} player={player} onPlayerClick={onPlayerClick} playerButton={playerButton}/>)
  return (
    <div>
      <h2>{title}</h2>
      {playerCards}
    </div>
  )
}
 