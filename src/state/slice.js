import { createSlice } from '@reduxjs/toolkit';
import { initial_state } from "./initial_state";
import { reducers } from "./reducers";

export const slice = createSlice({
    name: 'slice',
    initialState: initial_state,
    reducers: reducers
})

export const { setIsLoggedIn, setProducts, setCurrentActiveDate } = slice.actions;

export const getIsLoggedIn = state => state.slice.isLoggedIn;
export const getProducts = state => state.slice.products;
export const getCurrentActiveDate = state => state.slice.currentActiveDate;

export default slice.reducer;