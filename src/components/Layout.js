import React, { useState, useEffect } from 'react';
import { Container, Typography, AppBar, Toolbar, Box, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Leaderboard from './Leaderboard';
import DonationForm from './DonationForm';
import { Web3Button } from '@web3modal/react';

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
        width: '100%',
        justifyContent: 'center',
    },
});

export default function Layout() {
    const classes = useStyles();
    const [topDonation, setTopDonation] = useState(null);

    //   useEffect(() => {
    //     fetchTopDonation().then(data => setTopDonation(data));
    //   }, []);

    return (
        <React.Fragment>
            <AppBar position="static" sx={{ py: 5}}>
                <Toolbar className={classes.toolbar}>
                    <Grid container>
                        <Grid item md={12}>
                            <Box>
                                <Web3Button balance='show'/>
                            </Box>
                        </Grid>
                        <Grid item md={12}>
                            <Box>
                                <Typography variant="h2" color="inherit">
                                    Let's say i want to have a full ass sentence this big could this actually fit well and doesn't look bad at all? 
                                    Let's say i want to have a full ass sentence this big could this actually fit well and doesn't look bad at all? 
                                    Let's say i want to have a full ass sentence this big could this actually fit well and doesn't look bad at all? 
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Container className={classes.root}>
                <DonationForm />
                <Leaderboard />
            </Container>
        </React.Fragment>
    );
}
