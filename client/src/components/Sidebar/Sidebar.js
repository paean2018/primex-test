/* eslint-disable react/jsx-first-prop-new-line */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
    root: {
        borderRight: '1px solid #ccc',
        height: '100%',
    },
    activeRecord: {
        background: '#D3F2E0',
        padding: 10,
        cursor: 'pointer',
    },
    notActiveRecord: {
        padding: 10,
        cursor: 'pointer',
    },
});

const Sidebar = ({ masterRecords, activeRecord, setActiveRecord }) => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            {masterRecords.map((record) => (
                <Box key={record}
                    className={record === activeRecord ? classes.activeRecord
                        : classes.notActiveRecord}
                    onClick={() => setActiveRecord(record)}
                >
                    <p>
                        {record}
                    </p>
                </Box>
            ))}
        </Box>
    );
};

Sidebar.propTypes = {
    masterRecords: PropTypes.array,
    activeRecord: PropTypes.string,
    setActiveRecord: PropTypes.func,
};

Sidebar.defaultProps = {
    masterRecords: [],
    activeRecord: '',
    setActiveRecord: () => {},
};

export default Sidebar;
