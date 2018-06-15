import { combineReducers } from 'redux';
import usersReducer from '../reducers/usersReducer';

const rootReducer = combineReducers({
	usersStore: usersReducer,
});

export default rootReducer;
