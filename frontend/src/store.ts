import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import { schoolReducers } from "./reducers/schoolReducers";

const reducer = combineReducers({
    schoolList: schoolReducers
})

const middleware = [thunk]

const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)))

export default store