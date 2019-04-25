import { EXAMPLE_ACTION } from "../Actions/actionTypes";

export const simpleAction = (message) => (dispatch, getState) => {
    console.log(message)
    dispatch({
        type: EXAMPLE_ACTION,
        payload: message
    })
}