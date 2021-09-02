import { GET_USERS, GET_USERS_FAIL, GET_USERS_SUCCESS } from '../constants';

const INITIAL_STATE = {
    loading: null,
    users: null,
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
            };
        default:
            return state;
    }
}
