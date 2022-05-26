import React from "react"

import {Route,Switch,useRouteMatch} from 'react-router-dom';

import {TeamList} from '../components/player/TeamList'
import { TeamPage } from "../components/player/TeamPage";
export const TeamsPlayersPage = ({teams,players}) => {
  
  const match=useRouteMatch();

  return (
    <div style={{display:'flex'}}>
      <Switch>
        <Route exact path={`${match.url}/:teamName`}>
          <TeamPage players={players} teams={teams}></TeamPage>
        </Route>
        <Route>
          <TeamList teams={teams}/>
        </Route>
      </Switch>
    </div>
  )
}
