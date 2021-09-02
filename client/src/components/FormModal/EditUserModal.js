/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import PropTypes from 'prop-types';
import {
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Box,
} from '@material-ui/core';

import { countries, organisationFeatures, roleType } from '../../utils/constants';
import { requestEditUser } from '../../store/api';
import { resetRequestStatus } from '../../store/actions';

const useStyles = makeStyles(({
    container: {
        padding: '25px',
    },
}));

const EditUserModal = ({ openEditModal, setOpenEditModal }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.data);
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        role: '',
        organisation: '',
        organisation_features: [],
        country: '',
    });

    useEffect(() => {
        setData(user);
    }, [user]);

    const handleClose = () => {
        setOpenEditModal(false);
        dispatch(resetRequestStatus());
    };

    const handleData = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(requestEditUser(user?.id, data));
        setOpenEditModal(false);
    };

    return (
        <div>
            {data ? (
                <Dialog
                    onClose={handleClose}
                    open={openEditModal}
                >
                    <div className={classes.container}>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <TextField
                                    type="email"
                                    label="Email"
                                    onChange={handleData}
                                    name="email"
                                    value={data.email}
                                    fullWidth
                                    required
                                />
                            </div>
                            <Box display="flex">
                                <TextField
                                    label="First Name"
                                    onChange={handleData}
                                    name="firstName"
                                    value={data.firstName}
                                    fullWidth
                                    required
                                />
                                <TextField
                                    label="Last Name"
                                    onChange={handleData}
                                    name="lastName"
                                    value={data.lastName}
                                    fullWidth
                                    required
                                />
                            </Box>
                            <TextField
                                label="Organisation"
                                onChange={handleData}
                                name="organisation"
                                value={data.organisation}
                                fullWidth
                                required
                            />
                            <Box>
                                <FormControl fullWidth>
                                    <InputLabel>Organisation Feature</InputLabel>
                                    <Select
                                        onChange={handleData}
                                        value={data.organisation_features}
                                        name="organisation_features"
                                        multiple
                                    >
                                        {organisationFeatures.map((org) => {
                                            return (
                                                <MenuItem key={org} value={org}>
                                                    {org}
                                                </MenuItem>
                                            );
                                        })}
                                    </Select>
                                </FormControl>
                            </Box>
                            <Box display="flex" paddingTop={2}>
                                <FormControl fullWidth>
                                    <InputLabel>Role</InputLabel>
                                    <Select
                                        value={data.role}
                                        onChange={handleData}
                                        name="role"
                                        required
                                    >
                                        {roleType.map((role) => {
                                            return (
                                                <MenuItem key={role} value={role}>
                                                    {role}
                                                </MenuItem>
                                            );
                                        })}
                                    </Select>
                                </FormControl>
                                <FormControl fullWidth>
                                    <InputLabel>Country</InputLabel>
                                    <Select
                                        value={data.country}
                                        onChange={handleData}
                                        name="country"
                                        required
                                    >
                                        {countries.map((cntry) => {
                                            return (
                                                <MenuItem key={cntry} value={cntry}>
                                                    {cntry}
                                                </MenuItem>
                                            );
                                        })}
                                    </Select>
                                </FormControl>
                            </Box>
                            <Box paddingTop={5} textAlign="end">
                                <Button
                                    type="submit"
                                    size="small"
                                    variant="contained"
                                    color="primary"
                                >
                                    Save
                                </Button>
                            </Box>
                        </form>
                    </div>
                </Dialog>
            ) : null}
        </div>
    );
};

EditUserModal.propTypes = {
    openEditModal: PropTypes.bool,
    setOpenEditModal: PropTypes.func,
};

EditUserModal.defaultProps = {
    openEditModal: false,
    setOpenEditModal: () => {},
};

export default EditUserModal;
