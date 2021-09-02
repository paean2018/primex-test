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

const WorkspaceHeader = ({ setOpenAddModal }) => {
    const classes = useStyles();

    const handleOpen = () => {
        setOpenAddModal(true);
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
    setOpenAddModal: PropTypes.func,
};

WorkspaceHeader.defaultProps = {
    setOpenAddModal: () => {},
};

export default WorkspaceHeader;
