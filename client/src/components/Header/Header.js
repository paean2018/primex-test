import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar } from '@material-ui/core';

const useStyles = makeStyles(({
    root: {
        display: 'flex',
        height: 50,
        justifyContent: 'center',
        padding: 10,
        background: '#fff',
        color: '#000',
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
