import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';

// Define styles for FlippyLetter
const useStyles = makeStyles({
    letter: {
        display: 'inline-block',
        perspective: '500px',
        animation: '$flip 1s',
    },
    '@keyframes flip': {
        '0%': {
            transform: 'rotateX(0deg)',
        },
        '50%': {
            transform: 'rotateX(90deg)',
        },
        '100%': {
            transform: 'rotateX(0deg)',
        },
    },
});

// FlippyLetter component
export default function FlippyLetter(props) {
    // Using styles defined above
    const classes = useStyles();

    // useState hook to store the current letter and initiate a flip
    const [currentLetter, setCurrentLetter] = useState('');

    // useEffect hook to flip the letter after a slight delay
    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentLetter(props.letter);
        }, Math.random() * 500);
        return () => clearTimeout(timer);
    }, [props.letter]);

    return <span className={classes.letter}>{currentLetter}</span>;
};

