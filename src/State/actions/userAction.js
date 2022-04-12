import {LOGUSER, LOGOUTUSER } from "../types";

export const loguser = (data) => ({
type: LOGUSER,
payload: data
})

export const logoutuser = () => ({
    type: LOGOUTUSER,
})