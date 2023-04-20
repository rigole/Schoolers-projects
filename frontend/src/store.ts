import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import { schoolReducers, schoolDetails } from "./reducers/schoolReducers";
import { programReducers } from "./reducers/programReducers";
import { fieldOfStudyReducers } from "./reducers/fieldOfStudyReducers";
const reducer = combineReducers({
    schoolList: schoolReducers,
    school_details: schoolDetails,
    programState: programReducers,
    fieldOfStudyList: fieldOfStudyReducers
})

const middleware = [thunk]

const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)))

export default store