import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar } from '@material-ui/core';

const useStyles = makeStyles(({
    root: {
        display: 'flex',
        height: 60,
        justifyContent: 'center',
        padding: 20,
        background: '#fff',
        color: '#000',
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <AppBar className={classes.root}>
            <span> Header Component </span>
        </AppBar>
    );
}
