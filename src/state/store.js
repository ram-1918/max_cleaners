import { combineReducers, configureStore } from "@reduxjs/toolkit";
import sliceReducer from "./slice";

const combined_reducers = combineReducers({
    slice: sliceReducer
});

export default configureStore({
    reducer: combined_reducers
});