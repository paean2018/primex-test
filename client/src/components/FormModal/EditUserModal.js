/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
import { requestEditUser } from '../../store/api';
import { resetRequestStatus } from '../../store/actions';

const EditUserModal = ({ openEditModal, setOpenEditModal }) => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.data);
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        role: 'Owner',
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
                    <h1>edit modal</h1>
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
            ) : <p> Loading... </p>}
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
