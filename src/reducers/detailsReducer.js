import {
	DETAILS_FIND,
	DETAILS_GET_START,
	DETAILS_GET_SUCCESS,
	DETAILS_GET_ERROR,
} from '../constants';

const initialState = {
	users: [],
	user: {},
	isLoading: false,
	isError: false,
	errorMessage: '',
	shouldUpdate: false,
};

export function detailsReducer(state = initialState, action) {
	switch (action.type) {
		case DETAILS_GET_START:
			return {
				...state,
				isLoading: true,
			};
		case DETAILS_GET_SUCCESS:
			return {
				...state,
				isLoading: false,
				users: action.payload.data,
				shouldUpdate: true,
			};
		case DETAILS_GET_ERROR:
			return {
				...state,
				isLoading: false,
				isError: true,
				errorMessage: action.payload.error,
			};
		case DETAILS_FIND:
			const id = action.payload.userId;
			const user = state.users.find(user => user.id === parseInt(id, 10));
			return {
				...state,
				user,
				shouldUpdate: false,
			};
		default:
			return state;
	}
}
