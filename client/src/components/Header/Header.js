import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar } from '@material-ui/core';

const useStyles = makeStyles(({
    root: {
        background: '#fff',
        borderBottom: '1px solid #ccc',
        padding: '10px',
        display: 'flex',
        color: '#000',
        height: '50px',
        '& p': {
            margin: 0,
        },
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <AppBar className={classes.root}>
            <p> PrimeX </p>
        </AppBar>
    );
}
