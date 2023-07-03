import React, { useState, useEffect } from 'react';
import { Container, Typography, AppBar, Toolbar } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Leaderboard from './Leaderboard';
import DonationForm from './DonationForm';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
    },
});

export default function Layout() {
    const classes = useStyles();
    const [topDonation, setTopDonation] = useState(null);

    //   useEffect(() => {
    //     fetchTopDonation().then(data => setTopDonation(data));
    //   }, []);

    return (
        <Container className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h6" color="inherit">
                        Top Donator's Sentence
                    </Typography>
                    <Typography variant="h6" color="inherit">
                        {topDonation ? topDonation.sentence : 'Loading...'}
                    </Typography>
                </Toolbar>
            </AppBar>
            <DonationForm />
            <Leaderboard />
        </Container>
    );
}
