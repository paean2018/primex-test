/* eslint-disable no-useless-escape */
/* eslint-disable prefer-object-spread */
/* eslint-disable max-len */
/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
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

import {
    countries,
    defaultUserProps,
    organisationFeatures,
    roleType,
} from '../../utils/constants';
import { requestCreateUser, requestEditUser } from '../../store/api';

const useStyles = makeStyles(({
    container: {
        padding: 25,
        width: 380,
    },
}));

const FormModal = ({ openModal, setOpenModal }) => {
    const classes = useStyles();
    const { user } = useSelector((state) => state.data);
    const dispatch = useDispatch();
    const [data, setData] = useState();
    const [valid, setValid] = useState(false);
    const [validEmail, setValidEmail] = useState({});
    useEffect(() => {
        if (openModal.type === 'edit') {
            setValidEmail({
                status: true,
                valid: 'valid',
            });
            return setData(user);
        }
        return setData(defaultUserProps);
    }, [user, openModal]);

    useEffect(() => {
        checkFields();
    }, [openModal, data]);

    const handleClose = () => {
        setOpenModal(
            {
                status: false,
                type: '',
            },
        );
    };

    const handleData = (e) => {
        const { name, value } = e.target;
        if (name === 'email') {
            const result = validateEmail(value);
            if (result) {
                setValidEmail({
                    status: true,
                    valid: 'valid',
                });
            } else {
                setValidEmail({
                    status: false,
                    valid: 'invalid',
                });
            }
        }
        return setData({ ...data, [name]: value });
    };

    const checkFields = () => {
        const newData = Object.assign({}, data);
        delete newData.organisation_features; // not required
        delete newData.createdAt; // not required
        const result = Object.values(newData).every((d) => {
            return d.length > 0;
        });
        if (result && validEmail.status) {
            return setValid(true);
        }
        return setValid(false);
    };

    const validateEmail = (value) => {
        const emailValidation = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const result = emailValidation.test(value);
        return result;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (openModal.type === 'edit') {
            dispatch(requestEditUser(user?.id, data));
        }
        if (openModal.type === 'add') {
            dispatch(requestCreateUser(data));
        }
        setOpenModal({
            status: false,
            type: '',
        });
        setData(defaultUserProps);
    };

    return (
        data ? (
            <Dialog
                onClose={handleClose}
                open={openModal.status || false}
            >
                <Box className={classes.container}>
                    <form onSubmit={handleSubmit}>
                        <Box paddingTop={2}>
                            <FormControl fullWidth>
                                <TextField
                                    type="email"
                                    label="Email"
                                    onChange={handleData}
                                    name="email"
                                    value={data.email}
                                    error={validEmail?.valid === 'invalid'}
                                    helperText={validEmail?.valid === 'invalid' ? 'Invalid Email' : ''}
                                    required
                                />
                            </FormControl>
                        </Box>
                        <Box paddingTop={2} display="flex" justifyContent="space-between">
                            <FormControl>
                                <TextField
                                    label="First Name"
                                    onChange={handleData}
                                    name="firstName"
                                    value={data.firstName}
                                    required
                                />
                            </FormControl>
                            <FormControl>
                                <TextField
                                    label="Last Name"
                                    onChange={handleData}
                                    name="lastName"
                                    value={data.lastName}
                                    required
                                />
                            </FormControl>
                        </Box>
                        <Box paddingTop={2}>
                            <FormControl fullWidth>
                                <TextField
                                    label="Organisation"
                                    onChange={handleData}
                                    name="organisation"
                                    value={data.organisation}
                                    required
                                />
                            </FormControl>
                        </Box>
                        <Box paddingTop={2}>
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
                        <Box paddingTop={2}>
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
                        </Box>
                        <Box paddingTop={2}>
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
                                disabled={!valid}
                            >
                                Save
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Dialog>
        ) : null
    );
};

FormModal.propTypes = {
    openModal: PropTypes.shape({
        status: PropTypes.bool,
        type: PropTypes.string,
    }),
    setOpenModal: PropTypes.func,
};

FormModal.defaultProps = {
    openModal: PropTypes.shape({
        status: false,
        type: '',
    }),
    setOpenModal: () => {},
};

export default FormModal;
