import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import biscuitReducer from "./biscuit/biscuitReducer";

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    biscuit: biscuitReducer
})

export default rootReducer