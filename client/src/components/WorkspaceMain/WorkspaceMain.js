import React from 'react';
import { useDispatch } from 'react-redux';
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
import { requestDeleteUser, requestGetUser } from '../../store/api';

const useStyles = makeStyles({
    root: {
        padding: '8px',
    },
    actionIcon: {
        cursor: 'pointer',
    },
});

const WorkspaceMain = ({ users, setOpenEditModal }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleGetUser = (userId) => {
        dispatch(requestGetUser(userId));
        setOpenEditModal(true);
    };

    const handleDelete = (userId) => {
        // eslint-disable-next-line no-alert
        if (window.confirm('Delete user?')) {
            return dispatch(requestDeleteUser(userId));
        }
        return null;
    };

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
                        <Edit
                            className={classes.actionIcon}
                            onClick={() => handleGetUser(user.id)}
                        />
                        <Delete
                            className={classes.actionIcon}
                            onClick={() => handleDelete(user.id)}
                        />
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
    // eslint-disable-next-line react/forbid-prop-types
    users: PropTypes.array,
    setOpenEditModal: PropTypes.func,
};

WorkspaceMain.defaultProps = {
    users: [],
    setOpenEditModal: () => {},
};

export default WorkspaceMain;
