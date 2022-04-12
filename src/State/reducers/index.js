import {combineReducers} from "redux";
import userLog from "./userReducer";

const reducer = combineReducers({
user: userLog
})

export default reducer;