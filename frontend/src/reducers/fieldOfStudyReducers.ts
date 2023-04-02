import {
    FIELD_OF_STUDY_REQUEST,
    FIELD_OF_STUDY_SUCCESS,
    FIELD_OF_STUDY_FAIL
} from "../constants/fieldStudyConstant";


export const fieldOfStudyReducers = (state = {fieldsOfStudy: []}, action:any) => {

    switch (action.type) {
        case FIELD_OF_STUDY_REQUEST:
            return { loading: true, fieldsOfStudy: [] }

        case FIELD_OF_STUDY_SUCCESS:
            return { loading:false, fieldsOfStudy: action.payload }

        case FIELD_OF_STUDY_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state

    }
}