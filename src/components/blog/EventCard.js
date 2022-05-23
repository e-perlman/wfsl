import React from 'react'

export const EventCard = ({game}) => {
  return (
    <div>
        <h2>{game.strEvent}</h2>
        <h3>Date: {game.dateEvent}</h3>
        <h3>Time: {game.strTime}</h3>
        <h3>Venue: {game.strVenue}</h3>
        <h4>Home Team: {game.strHomeTeam}</h4>
        <h4>Away Team: {game.strHomeTeam}</h4>
    </div>
  )
}
