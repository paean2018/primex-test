import React from 'react';
import {
    AppBar,
    Box,
    Button,
    makeStyles,
    Typography,
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
        borderRadius: 0,
        '&:hover': {
            background: '#1bb752',
        },
    },
});

const WorkspaceHeader = ({ activeRecord, setOpenModal }) => {
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
                <Typography variant="subtitle1">{activeRecord}</Typography>
                <Button
                    size="small"
                    variant="contained"
                    onClick={handleOpen}
                    className={classes.customButton}
                >
                    <Typography variant="body">Add User</Typography>
                </Button>
            </Box>
        </AppBar>
    );
};

WorkspaceHeader.propTypes = {
    setOpenModal: PropTypes.func,
    activeRecord: PropTypes.string,
};

WorkspaceHeader.defaultProps = {
    setOpenModal: () => {},
    activeRecord: '',
};

export default WorkspaceHeader;
