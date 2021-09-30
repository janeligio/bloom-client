import React from 'react';
import { Link, Button, TextField, Paper, Typography } from '@mui/material';
import './sign-up.sass';

export default function SignUp() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');

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
            case 'confirmPassword':
                setConfirmPassword(value);
                break;
            default:
                break;
        }
    };

    const createAccountHandler = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        // TODO: Create account
    };

    return (
        <main id="sign-up">
            <Paper className="sign-up-container">
                <Typography variant="subtitle1">Sign Up</Typography>
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
                <TextField
                    fullWidth
                    required
                    size="small"
                    margin="normal"
                    label="Confirm Password"
                    name="confirmPassword"
                    onChange={onChangeHandler}
                    type="password"
                    value={confirmPassword}
                />

                <div className="actions">
                    <Button
                        className="create-account"
                        size="small"
                        variant="contained"
                        onClick={createAccountHandler}
                    >
                        Create Account
                    </Button>
                    <Link href="log-in" variant="body2">
                        Already have an account?
                    </Link>
                </div>
            </Paper>
        </main>
    );
}
