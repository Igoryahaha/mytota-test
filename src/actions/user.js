export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const ROUTING = 'ROUTING';

export const login = (payload) => {
    if (payload.login === 'admin' && payload.password === 'admin') {
        return {
            type: LOGIN_SUCCESS,
            payload: {
                name: payload.name,
                isAuthenticated: true
            }
        };
    } else {
        return {
            type: LOGIN_FAIL,
            payload: {
                name: payload.name,
                isAuthenticated: false
            }
        };
    }
};

export const logout = () => {
    return {
        type: LOGOUT_SUCCESS,
        payload: {
            isAuthenticated: false
        }
    };
};
