import axios from "axios"

import {
    SCHOOL_lIST_SUCCESS,
    SCHOOL_LIST_REQUEST,
    SCHOOL_LIST_FAIL,

    SCHOOL_DETAILS_SUCCESS,
    SCHOOL_DETAILS_REQUEST,
    SCHOOL_DETAILS_FAIL
} from "../constants/schoolConstants";
/*
const [input, setInput] = useState('');

const [schoolsFiltered, setSchoolsFiltered] = useState(schools)

const filteredSchools = async (input) => {
    const filtered =  schools.filter(school => {
        return school.name.toLowerCase().inclpudes(input.toLowerCase())
    })
    setInput(input);
    setSchoolsFiltered(filtered);
}
console.log(schoolsFiltered)
*/
export const schoolList = () => async (dispatch: any) => {

    try {
        dispatch({ type: SCHOOL_LIST_REQUEST })
        axios.get('http://127.0.0.1:8000/api/schools/').then((response) => {

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


export const schoolDetails = (school_id:any) => async (dispatch:any) => {
    try {
        dispatch({ type: SCHOOL_DETAILS_REQUEST })

        axios.get(`http://127.0.0.1:8000/api/schools/${school_id}/`).then((response) => {
            dispatch({ 
                type: SCHOOL_DETAILS_SUCCESS, 
                payload: response.data 
            })
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