import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import React,{useEffect,useState} from 'react';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import {Navbar} from './navigation/Navbar';
import {Header} from './navigation/Header';
import {Footer} from './navigation/Footer';
import {Home} from './Home';
import {About} from './About';
import {TeamsPlayersPage} from '../containers/TeamsPlayersPage';
import {ChooseMyTeamPage} from '../containers/ChooseMyTeamPage';
import {BlogPage} from '../containers/BlogPage';
import {PlayerCard} from './player/PlayerCard';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Bebas Neue',
      'cursive',
    ].join(','),
    fontSize:20
  },
  });

function App() {
  const [teams,setTeams]=useState([])
  const [players,setPlayers]=useState([])
  
  const fetchTeams=async ()=>{
    try{
      const resp= await fetch('https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=American_NWSL')
      const data= await resp.json()
      setTeams(data.teams)
    }catch(error){
      alert(error)
    }
  }
  const fetchPlayers=async ()=>{
    try{
      const resp= await fetch(' http://localhost:3001/players')
      const data= await resp.json()
      setPlayers(data)
    }catch(error){
      alert(error)
    }
  }
  useEffect(()=>{
    fetchTeams()
    fetchPlayers()
  },[]);
  
  return (
    <div className="App">
      <CssBaseline/>
      <Router>
        <Navbar/>
        <ThemeProvider theme={theme}>
          <Header/>
        </ThemeProvider>
        <Switch>
          <Route path='/leagueplayers'>
            <TeamsPlayersPage teams={teams} players={players}/>
          </Route>
          <Route path='/leagueplayers/:id'>
            <PlayerCard/>
          </Route>
          <Route path='/choosemyteam'>
            <ChooseMyTeamPage players={players} teams={teams}/>
          </Route>
          <Route path='/blog'>
            <BlogPage/>
          </Route>
          <Route path='/about'>
            <About/>
          </Route>
          <Route exact path='/'>
            <Home/>
          </Route>
        </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
