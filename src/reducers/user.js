import { LOGOUT_SUCCESS, LOGIN_FAIL, LOGIN_SUCCESS } from '../actions/user';

const initialState = {
    name: '',
    isAuthenticated: false
};

export function user(state = initialState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                name: action.payload.name,
                isAuthenticated: action.payload.isAuthenticated
            };

        case LOGOUT_SUCCESS:
            return {
                ...state,
                isAuthenticated: action.payload.isAuthenticated
            };
        default:
            return state;
    }
}
