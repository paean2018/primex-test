import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        border: '1px solid #ccc',
        padding: '10px',
    },
});

const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <span>Footer</span>
        </div>
    );
};

export default Footer;
