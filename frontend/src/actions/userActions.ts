import axios from "axios";

import {
    USER_REGISTER_REQUEST,
    USER_REGISTER_FAIL,
    USER_DETAILS_SUCCESS,

    USER_LOGOUT,

    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_REGISTER_SUCCESS
} from "../constants/userConstant"


export const register = (name:any, email:any, password:any) => async (dispatch:any) => {

    try{
        dispatch({
            type: USER_REGISTER_REQUEST
        })

        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            
            }
        }

        const { data } = await axios.post
        (
            'http://127.0.0.1:8000/api/users/signup/',

            {
                'username': name, 
                'email': email, 
                'password': password
            }, 
            
            config
        )

        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch(error:any){
        dispatch({
            type: USER_REGISTER_FAIL,
            payload:error.response && error.response.data.USER_DETAILS_FAIL
                ? error.response.data.detail
                : error.message

        })
    }
}

export const signIn = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST
        })

        const config = {
            headers: {
                'COntent-type': 'application/json'
            }
        }

        const { data } = await axios.post('http://127.0.0.1:8000/api/users/login/',
            {'username': email, 'password': password}, config)
        
            dispatch({
                type:USER_LOGIN_SUCCESS,
                payload:data
            })
        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error: any) {

        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
       
    }
}

export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({ type: USER_LOGOUT })
}