import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import './App.css';
// lazy components.
const About_Lazy = React.lazy(() => import('./Pages/About'));
const UserPage_Lazy = React.lazy(() => import('./Pages/UserPage'));
const GistsPage_Lazy = React.lazy(() => import('./Pages/GistsPage'));


function App() {

    return (

        <Suspense fallback={<div>Loading...</div>}>
            <Router>

                <Switch>
                    <Route path="/userpage/" exact component={UserPage_Lazy} />
                    <Route path="/gistpage/" exact component={GistsPage_Lazy} />
                    <Route path="/aboutpage/" exact strict component={About_Lazy} />
                    <Route path="/" exact strict component={HomePage} />

                </Switch>
            </Router>
        </Suspense>
    );

}
export default App;


