// Importing necessary libraries
import React, { useState, useEffect } from 'react';
import {
    ThemeProvider,
    createTheme,
    makeStyles,
} from '@mui/styles';
import { alpha } from '@mui/material/styles';
import { Typography, Paper } from '@mui/material';
import FlippyLetter from './FlippyLetter'; // Make sure to create FlippyLetter.jsx component

// Define styles for the components
const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '2em',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: theme.palette.background.default,
    },
    leaderboardItem: {
        position: 'relative',
        minWidth: 100,
        height: 100,
        margin: 10,
        lineHeight: '100px',
        fontSize: 100,
        fontFamily: 'Monospace',
        textAlign: 'center',
        color: theme.palette.primary.main,
    },
    playerName: {
        position: 'relative',
        height: '50%',
        width: '100%',
        backgroundColor: alpha(theme.palette.primary.main, 0.5),
        borderRadius: '10px 10px 0 0',
        overflow: 'hidden',
        zIndex: 0,
    },
    playerScore: {
        position: 'relative',
        height: '50%',
        width: '100%',
        marginTop: '-50%',
        borderRadius: '10px 10px 10px 10px',
        zIndex: -1,
        backgroundColor: theme.palette.background.default,
        backgroundImage: `linear-gradient(rgba(59, 182, 235, 0), ${alpha(
            theme.palette.primary.main,
            0.5
        )})`,
        transformOrigin: 'center',
    },
}));

// Leaderboard component
export default function Leaderboard() {
    // Using styles defined above
    const classes = useStyles();

    // Define players data
    const players = [
        { name: 'Player 1', score: 300 },
        { name: 'Player 2', score: 250 },
        { name: 'Player 3', score: 200 },
    ];

    // Return the leaderboard with player names and scores
    return (
        <div className={classes.root}>
            <Typography variant="h4">Leaderboard</Typography>
            {players.map((player, index) => (
                <Paper
                    key={index}
                    className={classes.leaderboardItem}
                    elevation={3}
                >
                    <Typography className={classes.playerName}>
                        {player.name.split('').map((letter, idx) => (
                            <FlippyLetter key={idx} letter={letter} />
                        ))}
                    </Typography>
                    <Typography className={classes.playerScore}>
                        Score: {player.score}
                    </Typography>
                </Paper>
            ))}
        </div>
    );
};
