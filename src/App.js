import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import UserPage from './Pages/UserPage';
import GistsPage from './Pages/GistsPage';
import About from './Pages/About';
import './App.css';

function App() {


    return (
     <Router>
       
            {/* { <div style={{display:'flex', flexDirection:'row'}}>
              <Link to="/">Home  </Link>
                 <Link to="/userpage/">Users   </Link>
                  <Link to="/gistpage/">Gists   </Link>
                  <Link to="/aboutpage/">About   </Link>
                  
                  </div>  } */}
                 
          <Switch>
        <Route path="/gistpage/" exact component={GistsPage} />
        <Route path="/userpage/" exact component={UserPage} />
        <Route path="/aboutpage/" exact strict component={About} />
        <Route path="/" exact strict component={HomePage} />

      </Switch>
     </Router>
    );
  
}
export default App;


