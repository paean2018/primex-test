import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({
    root: {
        background: '#fff',
        borderBottom: '1px solid #ccc',
        height: '40px',
        padding: '10px',
        display: 'flex',
        alignItems: 'center',
        position: 'sticky',
        '& p': {
            margin: 0,
        },
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <p> PrimeX </p>
        </div>
    );
}
