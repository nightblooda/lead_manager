import axios from 'axios'
import { returnErrors } from './messages';
import { AUTH_ERROR, USER_LOADED, USER_LOADING } from './types';



// Check token and load user
export const loadUser = () => (dispatch, getState) => {
    dispatch({type: USER_LOADING})

    const token = getState().auth.token;

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    if(token) {
        config.headers['Authorization'] = `Token ${token}`
    }

    axios.get('/api/auth/user', config)
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