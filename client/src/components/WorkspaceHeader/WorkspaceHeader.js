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
        background: '#fff',
        color: '#000',
        padding: '8px',
        top: '50px',
    },
});

const WorkspaceHeader = ({ setOpenAddModal }) => {
    const classes = useStyles();

    const handleOpen = () => {
        setOpenAddModal(true);
    };

    return (
        <AppBar position="sticky" className={classes.root}>
            <Box display="flex" justifyContent="space-between">
                <p>Master Record 1</p>
                <Button size="medium" variant="contained" color="primary" onClick={handleOpen}>
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
