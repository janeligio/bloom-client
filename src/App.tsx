import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Navigation from './components/navigation/navigation';

// Import views
import Home from './views/home/home';
import SignUp from './views/sign-up/sign-up';

function App() {
    return (
        <div>
            <Router>
                <Navigation />
                <Switch>
                    <Route path="/sign-up">
                        <SignUp />
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
