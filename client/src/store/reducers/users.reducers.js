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

const INITIAL_STATE = {
    loading: null,
    users: null,
    user: null,
    error: null,
    requestStatus: null,
};

export default function usersReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                loading: true,
            };
        case GET_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload,
                loading: false,
            };
        case GET_USERS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        case GET_USER:
            return {
                ...state,
            };
        case GET_USER_SUCCESS:
            return {
                ...state,
                user: action.payload.data,
            };
        case GET_USER_FAIL:
            return {
                ...state,
                error: action.error,
            };
        case CREATE_USER:
            return {
                ...state,
                loading: true,
            };
        case CREATE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                requestStatus: action.data.status,
            };
        case CREATE_USER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        case EDIT_USER:
            return {
                ...state,
                loading: true,
            };
        case EDIT_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                requestStatus: action.data.status,
            };
        case EDIT_USER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        case DELETE_USER:
            return {
                ...state,
                loading: true,
            };
        case DELETE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                requestStatus: action.data.status,
            };
        case DELETE_USER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        case RESET_REQUEST_STATUS:
            return {
                ...state,
                requestStatus: null,
            };
        default:
            return state;
    }
}
