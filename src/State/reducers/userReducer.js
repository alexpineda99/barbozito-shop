import { LOGUSER, LOGOUTUSER, LOGUSER_STORAGED } from "../types";

const initialState = {
    isAuth: false,
    holdSession: false,
    user: null
}

export default function userLog(state = initialState, action) {
    switch (action.type) {
        case LOGUSER:
            return { ...state, isAuth: true, user: action.payload, holdSession: false }
            // return state = action.payload;
            break;
        case LOGUSER_STORAGED:
            return { ...state, isAuth: true, user: action.payload, holdSession: true }
            // return state = action.payload;
            break;
        case LOGOUTUSER:
            return { ...state, isAuth: false, user: null, holdSession: false };
            break;
        default:
            return state;
            break;
    }
}