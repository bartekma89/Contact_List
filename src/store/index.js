import { combineReducers } from 'redux';
import { usersReducer } from '../reducers/usersReducer';
import { detailsReducer } from '../reducers/detailsReducers';

const rootReducer = combineReducers({
	usersStore: usersReducer,
	detailsStore: detailsReducer,
});

export default rootReducer;
