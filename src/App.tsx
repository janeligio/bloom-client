import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Navigation from './components/navigation/navigation';

// Import views
import Home from './views/home/home';
import LogIn from './views/log-in/log-in';
import SignUp from './views/sign-up/sign-up';
import Portfolio from './views/portfolio/portfolio';

function App() {
    return (
        <div>
            <Router>
                <Navigation />
                <Switch>
                    <Route path="/sign-up">
                        <SignUp />
                    </Route>
                    <Route path="/log-in">
                        <LogIn />
                    </Route>
                    <Route path="/portfolio">
                        <Portfolio />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
