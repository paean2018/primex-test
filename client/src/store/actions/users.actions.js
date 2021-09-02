import {
    GET_USERS,
    GET_USERS_FAIL,
    GET_USERS_SUCCESS,
    GET_USER,
    GET_USER_FAIL,
    GET_USER_SUCCESS,
    CREATE_USER,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAIL,
    EDIT_USER,
    EDIT_USER_SUCCESS,
    EDIT_USER_FAIL,
    DELETE_USER,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAIL,
    RESET_REQUEST_STATUS,
} from '../constants';

export function getUsers() {
    return {
        type: GET_USERS,
    };
}

export function getUsersSuccess(payload) {
    return {
        type: GET_USERS_SUCCESS,
        payload,
    };
}

export function getUsersFail(error) {
    return {
        type: GET_USERS_FAIL,
        error,
    };
}

export function getUser() {
    return {
        type: GET_USER,
    };
}

export function getUserSuccess(payload) {
    return {
        type: GET_USER_SUCCESS,
        payload,
    };
}

export function getUserFail(error) {
    return {
        type: GET_USER_FAIL,
        error,
    };
}

export function createUser(params) {
    return {
        type: CREATE_USER,
        params,
    };
}

export function createUserSuccess(data) {
    return {
        type: CREATE_USER_SUCCESS,
        data,
    };
}

export function createUserFail(error) {
    return {
        type: CREATE_USER_FAIL,
        error,
    };
}

export function editUser(params) {
    return {
        type: EDIT_USER,
        params,
    };
}

export function editUserSuccess(data) {
    return {
        type: EDIT_USER_SUCCESS,
        data,
    };
}

export function editUserFail(error) {
    return {
        type: EDIT_USER_FAIL,
        error,
    };
}

export function deleteUser(params) {
    return {
        type: DELETE_USER,
        params,
    };
}

export function deleteUserSuccess(data) {
    return {
        type: DELETE_USER_SUCCESS,
        data,
    };
}

export function deleteUserFail(error) {
    return {
        type: DELETE_USER_FAIL,
        error,
    };
}

export function resetRequestStatus(error) {
    return {
        type: RESET_REQUEST_STATUS,
        error,
    };
}
