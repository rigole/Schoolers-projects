import axios from "axios";

import {
    FIELD_OF_STUDY_REQUEST,
    FIELD_OF_STUDY_SUCCESS,
    FIELD_OF_STUDY_FAIL
} from "../constants/fieldStudyConstant";

export const fieldOfStudyList = () => async (dispatch: any) => {
    try {
        dispatch({ type: FIELD_OF_STUDY_REQUEST })
        axios.get('http://127.0.0.1:8000/api/fieldofstudy/').then((response) => {
            dispatch({
                type: FIELD_OF_STUDY_SUCCESS,
                payload: response.data
            })

        })
    } catch (error:any) {
        dispatch({
            type: FIELD_OF_STUDY_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}