/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
    Box,
    Button,
    Dialog,
    DialogContent,
    DialogContentText,
    DialogActions,
    makeStyles,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
} from '@material-ui/core';
import { Edit, Delete } from '@material-ui/icons';
import PropTypes from 'prop-types';

import { requestDeleteUser, requestGetUser } from '../../store/api';

const useStyles = makeStyles({
    root: {
        padding: 8,
        flex: 1,
        '& .MuiTableContainer-root': {
            height: '65vh',
            overflowY: 'auto',
        },
    },
    actionIcon: {
        cursor: 'pointer',
    },
    capitalizeText: {
        textTransform: 'capitalize',
    },
});

const WorkspaceMain = ({ users, setOpenModal }) => {
    // eslint-disable-next-line no-underscore-dangle
    const classes = useStyles();
    const dispatch = useDispatch();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [deleteId, setDeleteId] = useState();
    const [open, setOpen] = useState(false);

    const handleGetUser = (userId) => {
        dispatch(requestGetUser(userId));
        setOpenModal(
            {
                status: true,
                type: 'edit',
            },
        );
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setDeleteId();
    };

    const handleConfirmDelete = () => {
        dispatch(requestDeleteUser(deleteId));
    };

    const handleDelete = (id) => {
        setDeleteId(id);
        handleClickOpen();
    };

    const handleChangePage = (e, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (e) => {
        setRowsPerPage(+e.target.value);
        setPage(0);
    };

    const renderTableRow = () => {
        if (users.length > 0) {
            return users.sort((userA, userB) => (
                new Date(-1 * userA.createdAt._seconds).getTime()
                - new Date(-1 * userB.createdAt._seconds).getTime()
            )).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((user) => (
                    <TableRow key={user.id}>
                        <TableCell
                            component="th"
                            scope="row"
                            className={classes.capitalizeText}>
                            {`${user.firstName} ${user.lastName}`}
                        </TableCell>
                        <TableCell>
                            {user.email}
                        </TableCell>
                        <TableCell
                            className={classes.capitalizeText}>
                            {user.role}
                        </TableCell>
                        <TableCell
                            className={classes.capitalizeText}>
                            {user.organisation}
                        </TableCell>
                        <TableCell
                            className={classes.capitalizeText}>
                            {`${user.organisation_features} `}
                        </TableCell>
                        <TableCell
                            className={classes.capitalizeText}>
                            {user.country}
                        </TableCell>
                        <TableCell>
                            <Box display="flex">
                                <Box onClick={() => handleGetUser(user.id)}>
                                    <Edit
                                        className={classes.actionIcon}

                                    />
                                </Box>
                                <Box onClick={() => handleDelete(user.id)}>
                                    <Delete
                                        className={classes.actionIcon}
                                    />
                                </Box>
                            </Box>
                        </TableCell>
                    </TableRow>
                ));
        }
        return (
            <TableRow>
                <TableCell colSpan="7">
                    No users found.
                </TableCell>
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
            <TablePagination
                rowsPerPageOptions={[5, 10, 20]}
                component="div"
                count={users.length > 0 ? users.length : 0}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />

            {/* modal delete confirmation */}
            <Dialog
                open={open}
                onClose={handleClose}
                maxWidth="sm"
                fullWidth
            >
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Are you sure you want to delete user?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        No
                    </Button>
                    <Button onClick={handleConfirmDelete} variant="contained" color="primary">
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

WorkspaceMain.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    users: PropTypes.array,
    setOpenModal: PropTypes.func,
};

WorkspaceMain.defaultProps = {
    users: [],
    setOpenModal: () => {},
};

export default WorkspaceMain;
