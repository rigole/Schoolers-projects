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


export const  register = (username:any, email:any, password:any) => async (dispatch:any) => {

    try{
        dispatch({
            type: USER_REGISTER_REQUEST
        })
        

        const { data } = await axios.post('http://127.0.0.1:8000/api/users/signup/',

            {
                'username': username, 
                'email': email, 
                'password': password
            },
             {
                headers: {
                    'Content-Type': 'application/json',
                     Accept: 'application/json',
                }
            }
           
        )

        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data
            
        })

        const userInfos = {
            username,
            email
        }
       
      

        localStorage.setItem('userInfo', JSON.stringify((userInfos)));
    } catch(error:any){
        dispatch({
            type: USER_REGISTER_FAIL,
            payload:error.response && error.response.data.USER_REGISTER_FAIL
                ? error.response.data.detail
                : error.message

        })
    }
}

export const signIn = (email:any, password:any) => async (dispatch:any) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        }
        
        const { data } = await axios.post('http://127.0.0.1:8000/api/users/signin/',
            {'email': email, 'password': password} , config)
        
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

export const logout = () => (dispatch:any) => {
    localStorage.removeItem('userInfo')
    dispatch({ type: USER_LOGOUT })
}