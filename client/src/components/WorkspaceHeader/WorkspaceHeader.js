import React from 'react';
import {
    AppBar,
    Box,
    Button,
    makeStyles,
} from '@material-ui/core';

import PropTypes from 'prop-types';

const useStyles = makeStyles({
    root: {
        padding: 8,
    },
    customButton: {
        background: '#1EC659',
        color: '#fff',
        padding: '8px 15px',
        fontWeight: 'bold',
        '&:hover': {
            background: '#1bb752',
        },
    },
});

const WorkspaceHeader = ({ setOpenModal }) => {
    const classes = useStyles();

    const handleOpen = () => {
        setOpenModal(
            {
                status: true,
                type: 'add',
            },
        );
    };

    return (
        <AppBar position="sticky" className={classes.root}>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <p>Master Record 1</p>
                <Button
                    size="small"
                    variant="contained"
                    onClick={handleOpen}
                    className={classes.customButton}
                >
                    Add user
                </Button>
            </Box>
        </AppBar>
    );
};

WorkspaceHeader.propTypes = {
    setOpenModal: PropTypes.func,
};

WorkspaceHeader.defaultProps = {
    setOpenModal: () => {},
};

export default WorkspaceHeader;
