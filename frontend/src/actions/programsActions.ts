import axios from "axios"

import {
    PROGRAMS_LIST_SUCCESS,
    PROGRAMS_LIST_REQUEST,
    PROGRAMS_LIST_FAIL
} from "../constants/programsConstants";

export const programList = () => async (dispatch: any) => {
    try {
        dispatch({ type: PROGRAMS_LIST_REQUEST })
        axios.get('http://127.0.0.1:8000/api/programs/').then((response) => {
            dispatch({
                type: PROGRAMS_LIST_SUCCESS,
                payload:response.data
            })
            console.log(response.data)
        })
    } catch (error:any) {
        dispatch({
            type: PROGRAMS_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}
