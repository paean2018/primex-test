/* eslint-disable no-useless-escape */
/* eslint-disable prefer-object-spread */
/* eslint-disable max-len */
/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
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
    organisationFeatures,
    roleType,
    defaultOpenModalProps,
    defaultUserProps,
    invalidEmailProps,
    validEmailProps,
} from '../../utils/constants';

import { requestCreateUser, requestEditUser } from '../../store/api';

const BoxContainer = styled(Box)`
    padding-top: 1rem;
`;

const useStyles = makeStyles(({
    container: {
        padding: 25,
        width: 360,
    },
}));

const FormModal = ({ openModal, setOpenModal }) => {
    const classes = useStyles();
    const { user } = useSelector((state) => state.data);
    const dispatch = useDispatch();
    const [data, setData] = useState(null);
    const [valid, setValid] = useState(false);
    const [validEmail, setValidEmail] = useState(validEmailProps);

    useEffect(() => {
        if (openModal.type === 'edit') {
            return setData(user);
        }
        return setData(defaultUserProps);
    }, [user, openModal]);

    useEffect(() => {
        checkFields();
    }, [data]);

    const handleClose = () => {
        setOpenModal(defaultOpenModalProps);
    };

    const validateEmail = (userEmail) => {
        const emailValidation = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const result = emailValidation.test(userEmail);
        return result;
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

    const handleData = (e) => {
        const { name, value } = e.target;
        if (name === 'email') {
            const result = validateEmail(value);
            if (result) {
                setValidEmail(validEmailProps);
            } else {
                setValidEmail(invalidEmailProps);
            }
        }
        return setData({ ...data, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (openModal.type === 'edit') {
            dispatch(requestEditUser(user.id, data));
        }
        if (openModal.type === 'add') {
            dispatch(requestCreateUser(data));
        }
        setOpenModal(defaultOpenModalProps);
        setData(defaultUserProps);
    };

    return (
        data ? (
            <Box>
                <Dialog
                    onClose={handleClose}
                    open={openModal.status}
                >
                    <Box className={classes.container}>
                        <form onSubmit={handleSubmit}>
                            <BoxContainer>
                                <FormControl fullWidth>
                                    <TextField
                                        type="email"
                                        label="Email"
                                        onChange={handleData}
                                        name="email"
                                        value={data.email}
                                        error={validEmail.valid === 'invalid'}
                                        helperText={validEmail.valid === 'invalid' ? 'Invalid Email' : ''}
                                        required
                                    />
                                </FormControl>
                            </BoxContainer>
                            <BoxContainer display="flex" justifyContent="space-between">
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
                            </BoxContainer>
                            <BoxContainer>
                                <FormControl fullWidth>
                                    <TextField
                                        label="Organisation"
                                        onChange={handleData}
                                        name="organisation"
                                        value={data.organisation}
                                        required
                                    />
                                </FormControl>
                            </BoxContainer>
                            <BoxContainer>
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
                            </BoxContainer>
                            <BoxContainer>
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
                            </BoxContainer>
                            <BoxContainer>
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
                            </BoxContainer>
                            <BoxContainer textAlign="end">
                                <Button
                                    type="submit"
                                    size="small"
                                    variant="contained"
                                    color="primary"
                                    disabled={!valid}
                                >
                                    Save
                                </Button>
                            </BoxContainer>
                        </form>
                    </Box>
                </Dialog>
            </Box>
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
    openModal: PropTypes.shape(defaultOpenModalProps),
    setOpenModal: () => {},
};

export default FormModal;
