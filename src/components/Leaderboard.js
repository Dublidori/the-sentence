import React from 'react';
import { makeStyles, alpha } from '@mui/styles';
import { Typography, Paper } from '@mui/material';

// Define styles for the root and title
const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '2em',
        width: '80%', // make the leaderboard take up 80% of its parent's width
        padding: theme.spacing(3),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'rgba(45, 45, 45, 0.8)',
        borderRadius: theme.spacing(2),
        boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)',
    },
    leaderboardTitle: {
        marginBottom: '1em',
    },
}));

// Styles for each player item
const usePlayerStyles = makeStyles((theme) => ({
    leaderboardItem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: theme.spacing(3),
        padding: theme.spacing(3),
        width: 350,  // increased width
        height: 200, // increased height
        transition: 'transform 0.5s ease-in-out, opacity 1s ease-in',
        opacity: 0,
        transform: 'scale(0.9)',
        animation: '$fadeIn 1s forwards',
        '&:hover': {
            transform: 'scale(1.05)',
        },
    },
    playerName: {
        fontSize: 24,  // bigger font size
        fontWeight: 'bold',
        marginBottom: theme.spacing(1),
    },
    playerScore: {
        fontSize: 22,  // bigger font size
        color: theme.palette.primary.dark,
    },
    '@keyframes fadeIn': {
        '0%': {
            opacity: 0,
            transform: 'scale(0.9)',
        },
        '100%': {
            opacity: 1,
            transform: 'scale(1)',
        },
    },
}));


// Component for each player item
function PlayerItem({ player, rank }) {
    const classes = usePlayerStyles({ rank });

    return (
        <Paper className={classes.leaderboardItem} elevation={3}>
            <Typography className={classes.playerName}>
                {rank}. {player.name}
            </Typography>
            <Typography className={classes.playerScore}>
                {player.score} Points
            </Typography>
        </Paper>
    );
}

// Leaderboard component
export default function Leaderboard() {
    const classes = useStyles();

    // Define players data
    const players = [
        { name: 'Player 1', score: 300 },
        { name: 'Player 2', score: 250 },
        { name: 'Player 3', score: 200 },
    ];

    return (
        <div className={classes.root}>
            <Typography variant="h4" className={classes.leaderboardTitle}>Leaderboard</Typography>
            {players.map((player, index) => (
                <PlayerItem key={index} player={player} rank={index + 1} />
            ))}
        </div>
    );
}