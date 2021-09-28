import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Navigation from './components/navigation/navigation';

// Import views
import Home from './views/home/home';

function App() {
    return (
        <div>
            <Navigation />
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
