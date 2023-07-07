import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { schoolReducers, schoolDetails } from "./reducers/schoolReducers";
import { programReducers } from "./reducers/programReducers";
import { userRegisterReducer,userLoginReducer } from "./reducers/userReducers";
import { fieldOfStudyReducers } from "./reducers/fieldOfStudyReducers";

const reducer = combineReducers({
    schoolList: schoolReducers,
    school_details: schoolDetails,
    programState: programReducers,
    fieldOfStudyList: fieldOfStudyReducers,
    userRegister: userRegisterReducer,
    userSignIn: userLoginReducer,
})

const middleware = [thunk]

const userInfoFromStorage = localStorage.getItem('userInfo') ? 
    JSON.parse(localStorage.getItem('userInfo')!) : null


    const initialState = {
        userSignIn: { userInfo: userInfoFromStorage }
    }

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))



export default store