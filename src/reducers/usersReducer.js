import { USERS_CLEAR, USERS_DELETE } from '../constants';
import users from '../data/users.json';

const initialState = {
	users,
};

export default function usersReducer(state = initialState, action) {
	switch (action.type) {
		case USERS_CLEAR:
			return {
				...state,
				users: [],
			};
		case USERS_DELETE:
			let id = action.payload.userId;
			const filteredArray = state.users.filter(user => user.id !== id);
			return {
				...state,
				users: filteredArray,
			};
		default:
			return state;
	}
}
