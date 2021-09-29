import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './navigation.sass';

export default function Navigation() {
    interface Link {
        name: string;
        path: string;
    }
    const links: Link[] = [
        {
            name: 'Home',
            path: '/',
        },
    ];
    return (
        <Router>
            <nav id="navigation">
                <ul>
                    {links.map((link, index) => (
                        <li key={index}>
                            <Link to={link.path}>{link.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </Router>
    );
}
