import React,{useState} from "react"
import {Route,Switch,useRouteMatch} from 'react-router-dom';
import {TeamList} from '../components/player/TeamList'
import {PlayerList} from '../components/player/PlayerList'
import { TeamPage } from "../components/player/TeamPage";
export const TeamsPlayersPage = ({teams,players}) => {
  const [showTeam,setShownTeam]=useState({})

  function handleShowRoster(team){
      setShownTeam(team)
  }
  const shownPlayers=players
    .filter(player=>{
      if (showTeam.idTeam===player.idTeam) return true;
      return false;
    })
  const match=useRouteMatch();

  return (
    <div style={{display:'flex'}}>
      <Switch>
        <Route exact path={`${match.url}/:teamName`}>
          <TeamPage players={shownPlayers} team={showTeam}></TeamPage>
        </Route>
        <Route>
          <TeamList teams={teams} onShowRoster={handleShowRoster}/>
        </Route>
      </Switch>
    </div>
  )
}
