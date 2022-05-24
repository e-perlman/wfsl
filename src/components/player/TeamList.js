import { Grid } from "@mui/material"
import React from "react"
import {TeamCard} from './TeamCard'
export const TeamList = ({teams,onShowRoster}) => {
  const teamCards=teams.map(team=> <TeamCard key={team.idTeam} team={team} onShowRoster={onShowRoster}/>)
  return (
    <Grid>
      {teamCards}
    </Grid>
  )
}
