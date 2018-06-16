import {
	USERS_CLEAR,
	USERS_DELETE,
	USERS_GET_START,
	USERS_GET_SUCCESS,
	USERS_GET_ERROR,
} from '../constants';

const initialState = {
	users: [],
	isLoading: false,
	isError: false,
	errorMessage: '',
};

export function usersReducer(state = initialState, action) {
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
		case USERS_GET_START:
			return {
				...state,
				isLoading: true,
			};
		case USERS_GET_SUCCESS:
			return {
				...state,
				isLoading: false,
				users: action.payload.data,
			};
		case USERS_GET_ERROR:
			return {
				...state,
				isLoading: false,
				isError: true,
				errorMessage: action.payload.error,
			};
		default:
			return state;
	}
}
