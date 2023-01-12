import {
    SCHOOL_LIST_FAIL,
    SCHOOL_lIST_SUCCESS,
    SCHOOL_LIST_REQUEST,

    SCHOOL_DETAILS_REQUEST,
    SCHOOL_DETAILS_SUCCESS,
    SCHOOL_DETAILS_FAIL
} from "../constants/schoolConstants";

export const schoolReducers = (state = {schools: [] }, action:any) => {

    switch (action.type) {
        case SCHOOL_LIST_REQUEST:
            return {loading: true, schools: [] }

        case SCHOOL_lIST_SUCCESS:
            return { loading: false, schools: action.payload }

        case SCHOOL_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }

}

export const schoolDetails = (state = { school: {reviews:[]} }, action:any) => {
    switch (action.type) {
        case SCHOOL_DETAILS_REQUEST:
            return {loading: true, ...state}

        case SCHOOL_DETAILS_SUCCESS:
            return {loading: false, school: action.payload}

        case SCHOOL_DETAILS_FAIL:
            return { loading: false, error:action.payload }

        default:
            return state
    }
}