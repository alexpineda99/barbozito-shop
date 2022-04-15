import { LOGUSER, LOGOUTUSER, LOGUSER_STORAGED } from "../types";

export const loguser = (data) => ({
    type: LOGUSER,
    payload: data
})

export const loguserstoraged = (data) => ({
    type: LOGUSER_STORAGED,
    payload: data
})

export const logoutuser = () => ({
    type: LOGOUTUSER,
})