import axios from 'axios';

import {
    getUsers, getUsersFail, getUsersSuccess,
} from '../actions';

export function requestGetUsers(params) {
    return (dispatch) => {
        dispatch(getUsers(params));
        // axios.get('')
        axios.get('https://us-central1-primex-test-630fc.cloudfunctions.net/user')
            .then((response) => {
                if (response.error) {
                    throw (response.error);
                }
                dispatch(getUsersSuccess(response));
                return response;
            })
            .catch((error) => {
                dispatch(getUsersFail(error));
            });
    };
}

export function requestCreateUser(params) {
    return (dispatch) => {
        dispatch(getUsers(params));
        axios.get('https://us-central1-primex-test-630fc.cloudfunctions.net/user')
            .then((response) => {
                if (response.error) {
                    throw (response.error);
                }
                dispatch(getUsersSuccess(response));
                return response;
            })
            .catch((error) => {
                dispatch(getUsersFail(error));
            });
    };
}
