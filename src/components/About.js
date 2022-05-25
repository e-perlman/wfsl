import { Typography} from "@mui/material"
import { textAlign } from "@mui/system"
import React from "react"

export const About = () => {
  
  return (
    <div >
      <h3> This is a women's fantasy soccer league for all teams and players in the NWSL!</h3>
      <div style={{marginLeft:'auto',marginRight:'auto',width:'80%'}}>
      <Typography style={{textAlign:'center'}} variant='h6'>Teams and Players: Find out more information about each team in the NWSL and their players</Typography>
        <Typography style={{textAlign:'center'}} variant='h6'>Choose My Team: Search and Filter through all NWSL players by name, position and team. Then which players you want to your team!</Typography>
      <Typography style={{textAlign:'center'}} variant='h6'>Blog: See the results of the most recent games in the NWSL season. Make a blog post about a game, team or player!</Typography>
      </div>
    </div>
  )
}
