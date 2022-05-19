import './App.css';
import React from 'react';
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

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Header/>
        <Switch>
          <Route path='/leagueplayers'>
            <TeamsPlayersPage/>
          </Route>
          <Route path='/leagueplayers/:id'>
            <PlayerCard/>
          </Route>
          <Route path='/choosemyteam'>
            <ChooseMyTeamPage/>
          </Route>
          <Route path='/blog'>
            <BlogPage/>
          </Route>
          <Route path='/about'>
            <About/>
          </Route>
          <Route path='/'>
            <Home/>
          </Route>
        </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
