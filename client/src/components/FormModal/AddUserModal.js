/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Dialog from '@material-ui/core/Dialog';
import PropTypes from 'prop-types';
import {
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
} from '@material-ui/core';

import { organisationFeatures, roleType } from '../../utils/constants';
import { requestCreateUser } from '../../store/api';

const AddUserModal = ({ openAddModal, setOpenAddModal }) => {
    const dispatch = useDispatch();
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        role: 'Owner',
        organisation: '',
        organisation_features: ['Trade Vault'],
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
        <div>
            <Dialog
                onClose={handleClose}
                open={openAddModal}
            >
                <form onSubmit={handleSubmit}>
                    <div>
                        <TextField
                            label="Email"
                            onChange={handleData}
                            name="email"
                            value={data.email}
                        />
                    </div>
                    <div>
                        <TextField
                            label="First Name"
                            onChange={handleData}
                            name="firstName"
                            value={data.firstName}
                        />
                        <TextField
                            label="Last Name"
                            onChange={handleData}
                            name="lastName"
                            value={data.lastName}
                        />
                    </div>
                    <div>
                        <FormControl>
                            <InputLabel>Role</InputLabel>
                            <Select
                                value={data.role}
                                onChange={handleData}
                                name="role"
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
                            label="Organisation"
                            onChange={handleData}
                            name="organisation"
                            value={data.organisation}
                        />
                    </div>
                    <div>
                        <FormControl>
                            <InputLabel>Role</InputLabel>
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
                        <TextField
                            label="Country"
                            onChange={handleData}
                            name="country"
                            value={data.country}
                        />
                    </div>
                    <Button type="submit" size="small" variant="contained" color="primary">
                        Save
                    </Button>
                </form>
            </Dialog>
        </div>
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
