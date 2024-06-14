export const reducers = {
    setIsLoggedIn: (state, action) => { state.isLoggedIn = action.payload; },
    setProducts: (state, action) => { state.products = action.payload; }
}