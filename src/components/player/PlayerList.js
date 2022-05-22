import React from "react";
import {PlayerCard} from './PlayerCard'
export const PlayerList = ({players}) => {
    const playerCards=players.map(player=> <PlayerCard key={player.idPlayer} player={player}/>)
  return (
    <div>
      {playerCards}
    </div>
  )
}
