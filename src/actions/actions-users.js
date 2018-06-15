import { USERS_CLEAR, USERS_DELETE } from '../constants';

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
