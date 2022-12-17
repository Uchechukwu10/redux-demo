import { BUY_BISCUIT } from "./biscuitTypes";
import { ADD_BISCUIT } from "./biscuitTypes";

const initialState = {
    numOfBiscuits: 12
}

const biscuitReducer = (state=initialState, action) => {
    switch (action.type) {
        case BUY_BISCUIT: return {
            ...state,
            numOfBiscuits: state.numOfBiscuits - 1
        }
        case ADD_BISCUIT: return {
            ...state,
            numOfBiscuits: state.numOfBiscuits + 1
        }
        default: return state
    }
}

export default biscuitReducer