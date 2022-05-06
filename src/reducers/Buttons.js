import { TO_GREEN, TO_RED, TO_BLUE } from '../consts.js';

const initialValue = { color: "" }

export const colorReducer = (state = { initialValue }, action) => {
    switch (action.type) {
        case TO_GREEN: {
            return { color: "green" }
        }
        case TO_RED: {
            return { color: "red" }
        }
        case TO_BLUE: {
            return { color: "blue" }
        }
        default: {
            return state;
        }
    }
}