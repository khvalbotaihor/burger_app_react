import * as actionTypes from '../actions/actionTypes';

export const authStart = () =>{
    return{
        type: actionTypes.AUTH_START
    }
}
export const authSucess = (authData) =>{
    return{
        type: actionTypes.AUTH_SUCCESS,
        authData:authData
    }
}
export const authFail = (error) =>{
    return{
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const auth = (email, password) =>{
    return dispatch => {
        // ... authenticate user
        dispatch(authStart());

    }
}