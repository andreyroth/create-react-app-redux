import initialState from './initialState';
import { EXAMPLE_ACTION } from "../Actions/actionTypes";

export default (state = initialState.simpleReducer, action) => {
    switch (action.type) {
        case EXAMPLE_ACTION:
            return {
                message: action.payload
            }
        default:
            return state;
    }
}