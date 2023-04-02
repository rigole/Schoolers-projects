import {
    PROGRAMS_LIST_REQUEST,
    PROGRAMS_LIST_SUCCESS,
    PROGRAMS_LIST_FAIL
} from "../constants/programsConstants";

export const programReducers = (state = {programs: [] }, action:any) => {

    switch (action.type) {
        case PROGRAMS_LIST_REQUEST:
            return {loading: true, programs: [] }

        case PROGRAMS_LIST_SUCCESS:
            return { loading: false, programs: action.payload }

        case PROGRAMS_LIST_FAIL:
            return { loading: false, error:action.payload }

        default:
            return state
    }
}