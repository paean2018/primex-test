/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
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

import { organisationFeatures, roleType } from '../../constants';

const FormModal = ({ open, setOpen }) => {
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
        setOpen(false);
    };

    const handleData = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    return (
        <div>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <form>
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
                    <Button size="small" variant="contained" color="primary">
                        Save
                    </Button>
                </form>
            </Dialog>
        </div>
    );
};

FormModal.propTypes = {
    open: PropTypes.bool,
    setOpen: PropTypes.func,
};

FormModal.defaultProps = {
    open: false,
    setOpen: () => {},
};

export default FormModal;
