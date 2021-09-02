import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        borderRight: '1px solid #ccc',
        height: '100%',
    },
});

const Sidebar = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <span>side bar</span>
        </div>
    );
};

export default Sidebar;
