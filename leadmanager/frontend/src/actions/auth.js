import axios from 'axios'
import { returnErrors } from './messages';
import { AUTH_ERROR, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT_SUCCESS, USER_LOADED, USER_LOADING, REGISTER_SUCCESS, REGISTER_FAIL } from './types';



// Check token and load user
export const loadUser = () => (dispatch, getState) => {
    dispatch({type: USER_LOADING})

    axios.get('/api/auth/user', tokenConfig(getState))
    .then(res => {
        dispatch({
            type: USER_LOADED,
            payload: res.data
        })
    }).catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status))
        dispatch({
            type: AUTH_ERROR
        })
    })
}

// Login user
export const login = (username, password) => (dispatch) => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    // Request Body
    const body = JSON.stringify({ username, password });

    axios.post('/api/auth/login', body, config)
    .then(res => {
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })
    }).catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status))
        dispatch({
            type: LOGIN_FAIL
        })
    })
}



// Register user
export const register = ({username, password, email}) => (dispatch) => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    // Request Body
    const body = JSON.stringify({ username, email, password });

    axios.post('/api/auth/register', body, config)
    .then(res => {
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })
    }).catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status))
        dispatch({
            type: REGISTER_FAIL
        })
    })
}

// Logout user
export const logout = () => (dispatch, getState) => {

    

    axios.post('/api/auth/logout/', null, tokenConfig(getState))
    .then(res => {
        dispatch({
            type: LOGOUT_SUCCESS,
            payload: res.data
        })
    }).catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status))
    })
}

// Setup config with token - helper function
export const tokenConfig = getState => {
    const token = getState().auth.token;

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    if(token) {
        config.headers['Authorization'] = `Token ${token}`
    }

    return config
}