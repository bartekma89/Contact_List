import {
    DETAILS_FIND,
    DETAILS_GET_START,
    DETAILS_GET_SUCCESS,
    DETAILS_GET_ERROR,
} from '../constants';
import axios from 'axios';

export function findUser(userId) {
    return {
        type: DETAILS_FIND,
        payload: {
            userId,
        },
    };
}

export function getUsersStart() {
    return {
        type: DETAILS_GET_START,
    };
}

export function getUsersSuccess(data) {
    return {
        type: DETAILS_GET_SUCCESS,
        payload: {
            data,
        },
    };
}

export function getUsersError(error) {
    return {
        type: DETAILS_GET_ERROR,
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
