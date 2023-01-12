import axios from "axios"

import {
    SCHOOL_lIST_SUCCESS,
    SCHOOL_LIST_REQUEST,
    SCHOOL_LIST_FAIL,

    SCHOOL_DETAILS_SUCCESS,
    SCHOOL_DETAILS_REQUEST,
    SCHOOL_DETAILS_FAIL
} from "../constants/schoolConstants";


export const schoolList = () => async (dispatch: any) => {

    try {
        dispatch({ type: SCHOOL_LIST_REQUEST })
        axios.get('/api/products/').then((response) => {

            dispatch({
                type: SCHOOL_lIST_SUCCESS,
                payload: response.data
            })
        })
    } catch (error:any) {

        dispatch({
            type: SCHOOL_LIST_FAIL,
            payload: error.response && error.response.data.detail
            ? error.response.data.detail
                : error.message
        })
    }
}

export const schoolDetails = (id:number) => async (dispatch:any) => {
    try {
        dispatch({ type: SCHOOL_DETAILS_REQUEST })

        axios.get(`/api/schools/${id}/`).then((response) => {
            dispatch({ type: SCHOOL_DETAILS_SUCCESS, payload: response.data })
        })
    } catch(error:any) {
        dispatch({
            type: SCHOOL_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })

    }
}