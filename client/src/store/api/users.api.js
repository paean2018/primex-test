import axios from 'axios';
import { endpoint } from '../../constants';

import {
    getUsers, getUsersFail, getUsersSuccess,
} from '../actions';

export function requestGetUsers(params) {
    return (dispatch) => {
        dispatch(getUsers(params));
        // axios.get('')
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
            });
    };
}

export function requestCreateUser(params) {
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
            });
    };
}
