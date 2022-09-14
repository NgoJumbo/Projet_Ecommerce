import { combineReducers } from "redux";
import LoginReducers from "./redux/Login/LoginReducers";

const rootReducer = combineReducers({
    login: LoginReducers
})
export default rootReducer