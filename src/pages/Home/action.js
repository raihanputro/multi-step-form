import { SET_PERSONAL_INFO, SET_STEP } from "./constant";

export const setPersonalInfo = ( userData ) => ({
    type: SET_PERSONAL_INFO,
    userData
})

export const setStep = ( step ) => ({
    type: SET_STEP,
    step
})