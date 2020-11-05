import axios from 'axios';

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

        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }

        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=AIzaSyBmSFTDYjbvZYlS-WAM1SSqBnRUabG23m0', authData)
            .then(response =>{
                console.log(response);
                dispatch(authSucess(response.data))
            })
            .catch(err => {
                console.log(err);
                dispatch(authFail())
            })

    }
}