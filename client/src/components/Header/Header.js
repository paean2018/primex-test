import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Typography } from '@material-ui/core';

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

const Header = () => {
    const classes = useStyles();

    return (
        <AppBar className={classes.root}>
            <Typography variant="h6">Header Component</Typography>
        </AppBar>
    );
};

export default Header;
