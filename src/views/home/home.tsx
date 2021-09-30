import React from 'react';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import './home.sass';

export default function Home(): JSX.Element {
    return (
        <main id="home">
            <Typography variant="h2" component="h1">
                Boost your knowledge portfolio.
            </Typography>
            <Typography variant="body1">
                Keep track of your skills by viewing your projects, experiences,
                and education.
            </Typography>
            <Typography variant="body1">
                Rate your skills and add new ones.
            </Typography>
            <Typography variant="body1">
                Set goals for yourself and track your progress.
            </Typography>

            <nav className="actions">
                <Link to="/portfolio">Try it out</Link>

                <Link to="/sign-up">Sign up</Link>
            </nav>
        </main>
    );
}
