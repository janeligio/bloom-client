import React from 'react';
import { Link } from 'react-router-dom';
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
        {
            name: 'Portfolio',
            path: '/portfolio',
        },
        {
            name: 'Skills',
            path: '/skills',
        },
        {
            name: 'Projects',
            path: '/projects',
        },
        {
            name: 'Work',
            path: '/work',
        },
        {
            name: 'Progress',
            path: '/progress',
        },
        {
            name: 'User',
            path: '/user',
        },
    ];
    return (
        <nav id="navigation">
            <ul>
                {links.map((link, index) => (
                    <li key={index}>
                        <Link to={link.path}>{link.name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
