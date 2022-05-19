import './App.css';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';

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
    </div>
  );
}

export default App;
