import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        borderRight: '1px solid #ccc',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const Sidebar = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <span>Sidebar Component</span>
        </div>
    );
};

export default Sidebar;
