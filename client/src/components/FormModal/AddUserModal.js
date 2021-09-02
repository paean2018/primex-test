/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import Dialog from '@material-ui/core/Dialog';
import PropTypes from 'prop-types';
import {
    Box,
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
} from '@material-ui/core';

import { organisationFeatures, roleType } from '../../utils/constants';
import { requestCreateUser } from '../../store/api';

const useStyles = makeStyles(({
    container: {
        padding: '25px',
    },
}));

const AddUserModal = ({ openAddModal, setOpenAddModal }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        role: 'Owner',
        organisation: '',
        organisation_features: [],
        country: '',
    });

    const handleClose = () => {
        setOpenAddModal(false);
    };

    const handleData = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(requestCreateUser(data));
        setOpenAddModal(false);
        setData({
            firstName: '',
            lastName: '',
            email: '',
            role: 'Owner',
            organisation: '',
            organisation_features: ['Trade Vault'],
            country: '',
        });
    };

    return (
        <Dialog
            onClose={handleClose}
            open={openAddModal}
        >
            <div className={classes.container}>
                <form onSubmit={handleSubmit}>
                    <div>
                        <TextField
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
                    <Box display="flex">
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
                        <TextField
                            label="Country"
                            onChange={handleData}
                            name="country"
                            value={data.country}
                            fullWidth
                            required
                        />

                    </Box>
                    <Box paddingTop={5} textAlign="end">
                        <Button type="submit" size="small" variant="contained" color="primary">
                            Save
                        </Button>
                    </Box>
                </form>
            </div>
        </Dialog>
    );
};

AddUserModal.propTypes = {
    openAddModal: PropTypes.bool,
    setOpenAddModal: PropTypes.func,
};

AddUserModal.defaultProps = {
    openAddModal: false,
    setOpenAddModal: () => {},
};

export default AddUserModal;
