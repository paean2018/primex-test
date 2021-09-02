import React from 'react';
import {
    makeStyles,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@material-ui/core';
import { Edit, Delete } from '@material-ui/icons';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
    root: {
        padding: '8px',
    },
    actionIcon: {
        cursor: 'pointer',
    },
});

const WorkspaceMain = ({ users }) => {
    const classes = useStyles();

    const renderTableRow = () => {
        if (users.length > 0) {
            return users.map((user) => (
                <TableRow key={user.id}>
                    <TableCell component="th" scope="row">
                        {`${user.firstName} ${user.lastName}`}
                    </TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.role}</TableCell>
                    <TableCell>{user.organisation}</TableCell>
                    <TableCell>{user.organisation_features}</TableCell>
                    <TableCell>{user.country}</TableCell>
                    <TableCell>
                        <Edit className={classes.actionIcon} />
                        <Delete className={classes.actionIcon} />
                    </TableCell>
                </TableRow>
            ));
        }
        return (
            <TableRow>
                <TableCell>No users found.</TableCell>
            </TableRow>
        );
    };

    return (
        <div className={classes.root}>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Role</TableCell>
                            <TableCell>Organisation</TableCell>
                            <TableCell>Organisation Features</TableCell>
                            <TableCell>Country</TableCell>
                            <TableCell />
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {renderTableRow()}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

WorkspaceMain.propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape({
        firstName: PropTypes.string,
        lastName: PropTypes.string,
    })),
};

WorkspaceMain.defaultProps = {
    users: [],
};

export default WorkspaceMain;
