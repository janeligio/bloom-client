import React from 'react';
import { Link, Button, TextField, Paper, Typography } from '@mui/material';
import './log-in.sass';

export default function LogIn() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();

        const field = event.currentTarget.getAttribute('name');
        const value = event.currentTarget.value;
        switch (field) {
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            default:
                break;
        }
    };

    const createAccountHandler = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        // TODO: Log in user
    };

    return (
        <main id="log-in">
            <Paper className="log-in-container">
                <Typography variant="subtitle1">Log In</Typography>
                <TextField
                    fullWidth
                    required
                    size="small"
                    margin="normal"
                    label="Email"
                    name="email"
                    onChange={onChangeHandler}
                    value={email}
                />
                <TextField
                    fullWidth
                    required
                    size="small"
                    margin="normal"
                    label="Password"
                    name="password"
                    onChange={onChangeHandler}
                    type="password"
                    value={password}
                />

                <div className="actions">
                    <Button
                        className="create-account"
                        size="small"
                        variant="contained"
                        onClick={createAccountHandler}
                    >
                        Log in
                    </Button>
                    <Link href="sign-up" variant="body2">
                        Create an account
                    </Link>
                </div>
            </Paper>
        </main>
    );
}
