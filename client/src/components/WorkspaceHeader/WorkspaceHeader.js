import React from 'react';
import { Box, Button, makeStyles } from '@material-ui/core';

import PropTypes from 'prop-types';

const useStyles = makeStyles({
    root: {
        borderBottom: '1px solid #ccc',
        padding: '8px',
    },
});

const WorkspaceHeader = ({ setOpenAddModal }) => {
    const classes = useStyles();

    const handleOpen = () => {
        setOpenAddModal(true);
    };

    return (
        <div className={classes.root}>
            <Box display="flex" justifyContent="space-between">
                <p>Master Record 1</p>
                <Button size="medium" variant="contained" color="primary" onClick={handleOpen}>
                    Add user
                </Button>
            </Box>
        </div>
    );
};

WorkspaceHeader.propTypes = {
    setOpenAddModal: PropTypes.func,
};

WorkspaceHeader.defaultProps = {
    setOpenAddModal: () => {},
};

export default WorkspaceHeader;
