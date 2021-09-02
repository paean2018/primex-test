import axios from 'axios';
import { endpoint } from '../../utils/constants';

import {
    getUsers,
    getUsersFail,
    getUsersSuccess,
    getUser,
    getUserFail,
    getUserSuccess,
    createUser,
    createUserFail,
    createUserSuccess,
    editUser,
    editUserSuccess,
    editUserFail,
    deleteUser,
    deleteUserSuccess,
    deleteUserFail,
    resetRequestStatus,
} from '../actions';

export function requestGetUsers(params) {
    return (dispatch) => {
        dispatch(getUsers(params));
        axios.get(endpoint)
            .then((response) => {
                if (response.error) {
                    throw (response.error);
                }
                dispatch(getUsersSuccess(response));
                return response;
            })
            .catch((error) => {
                dispatch(getUsersFail(error));
            }).finally(() => {
                dispatch(resetRequestStatus());
            });
    };
}

export function requestGetUser(userId) {
    return (dispatch) => {
        dispatch(getUser(userId));
        axios.get(`${endpoint}/${userId}`)
            .then((response) => {
                if (response.error) {
                    throw (response.error);
                }
                dispatch(getUserSuccess(response));
                return response;
            })
            .catch((error) => {
                dispatch(getUserFail(error));
            }).finally(() => {
                dispatch(resetRequestStatus());
            });
    };
}

export function requestCreateUser(params) {
    return (dispatch) => {
        dispatch(createUser({ ...params }));
        axios.post(endpoint, { ...params })
            .then((response) => {
                if (response.error) {
                    throw (response.error);
                }
                dispatch(createUserSuccess(response));
                return response;
            })
            .catch((error) => {
                dispatch(createUserFail(error));
            }).finally(() => {
                dispatch(resetRequestStatus());
            });
    };
}

export function requestEditUser(userId, params) {
    return (dispatch) => {
        dispatch(editUser(userId));
        axios.put(`${endpoint}/${userId}`, { ...params }).then((response) => {
            if (response.error) {
                throw (response.error);
            }
            dispatch(editUserSuccess(response));
            return response;
        })
            .catch((error) => {
                dispatch(editUserFail(error));
            }).finally(() => {
                dispatch(resetRequestStatus());
            });
    };
}

export function requestDeleteUser(userId) {
    return (dispatch) => {
        dispatch(deleteUser(userId));
        axios.delete(`${endpoint}/${userId}`)
            .then((response) => {
                if (response.error) {
                    throw (response.error);
                }
                dispatch(deleteUserSuccess(response));
                return response;
            })
            .catch((error) => {
                dispatch(deleteUserFail(error));
            }).finally(() => {
                dispatch(resetRequestStatus());
            });
    };
}
