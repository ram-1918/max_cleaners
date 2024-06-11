import { createSlice } from '@reduxjs/toolkit';
import { initial_state } from "./initial_state";
import { reducers } from "./reducers";

export const slice = createSlice({
    name: 'slice',
    initialState: initial_state,
    reducers: reducers
})

export const { setProducts } = slice.actions;

export const getProducts = state => state.slice.products;

export default slice.reducer;