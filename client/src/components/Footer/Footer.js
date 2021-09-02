import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        border: '1px solid #ccc',
        padding: 15,
        position: 'fixed',
        bottom: 0,
        width: '100%',
    },
    container: {
        textAlign: 'start',
    },
});

const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <span>Footer Component</span>
            </div>
        </div>
    );
};

export default Footer;
