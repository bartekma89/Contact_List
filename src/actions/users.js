import {
	USERS_CLEAR,
	USERS_DELETE,
	USERS_GET_START,
	USERS_GET_SUCCESS,
	USERS_GET_ERROR,
} from '../constants';
import axios from 'axios';

export function clearUsers() {
	return {
		type: USERS_CLEAR,
	};
}

export function deleteUser(userId) {
	return {
		type: USERS_DELETE,
		payload: {
			userId,
		},
	};
}

export function getUsersStart() {
	return {
		type: USERS_GET_START,
	};
}

export function getUsersSuccess(data) {
	return {
		type: USERS_GET_SUCCESS,
		payload: {
			data,
		},
	};
}

export function getUsersError(error) {
	return {
		type: USERS_GET_ERROR,
		payload: {
			error,
		},
	};
}

export function getUsers() {
	const url = 'https://jsonplaceholder.typicode.com/users';
	return function(dispatch) {
		dispatch(getUsersStart());

		axios
			.get(url)
			.then(response => response.data)
			.then(users => dispatch(getUsersSuccess(users)))
			.catch(error =>
				dispatch(
					getUsersError('404 There are not data are you looking for')
				)
			);
	};
}
