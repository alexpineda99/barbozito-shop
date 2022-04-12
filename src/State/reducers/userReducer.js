import { LOGUSER, LOGOUTUSER } from "../types";

const initialState = {
    isAuth: false,
    user: null
}

export default function userLog( state = initialState, action) {
    switch (action.type) {
        case LOGUSER:
            return {...state, isAuth: true, user: action.payload}
            // return state = action.payload;
            break;
        case LOGOUTUSER:
            return {...state, isAuth: false, user: null};
            break;
        default:
            return state;
            break;
    }
}