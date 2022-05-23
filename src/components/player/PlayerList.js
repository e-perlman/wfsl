import React from "react";
import {PlayerCard} from './PlayerCard'
export const PlayerList = ({players,title,onPlayerClick,playerButton,playerKey}) => {
    const playerCards=players.map(player=> <PlayerCard key={player[playerKey]} player={player} onPlayerClick={onPlayerClick} playerButton={playerButton}/>)
  return (
    <div>
      <h2>{title}</h2>
      {playerCards}
    </div>
  )
}
 