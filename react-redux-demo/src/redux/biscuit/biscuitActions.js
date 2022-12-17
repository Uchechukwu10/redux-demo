import { BUY_BISCUIT } from "./biscuitTypes";
import { ADD_BISCUIT } from "./biscuitTypes";

export const buyBiscuit = () => {
    return {
        type: BUY_BISCUIT
    }
}

export const addBiscuit = () => {
    return {
        type: ADD_BISCUIT
    }
}