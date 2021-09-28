import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

export default function Navigation() {
  return (<Router>
      <ul><li><Link to="/">Home</Link></li></ul>
      </Router>);
};