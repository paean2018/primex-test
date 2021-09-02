import { combineReducers } from 'redux';

import usersReducer from './users.reducers';

const rootReducer = combineReducers({
    data: usersReducer,
});

export default rootReducer;
