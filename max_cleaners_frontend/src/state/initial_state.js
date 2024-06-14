export const initial_state = {
    isLoggedIn: JSON.parse(localStorage.getItem('lg', null) ? localStorage.getItem('lg') : 'false'),
    products: ['shirt'],
}