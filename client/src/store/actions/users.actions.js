import { GET_USERS, GET_USERS_FAIL, GET_USERS_SUCCESS } from '../constants';

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
