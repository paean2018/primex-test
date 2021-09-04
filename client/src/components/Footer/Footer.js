import React from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';

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
        <Box className={classes.root}>
            <Box className={classes.container}>
                <Typography variant="subtitle2">Footer Component</Typography>
            </Box>
        </Box>
    );
};

export default Footer;
