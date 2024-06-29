export const initial_state = {
    isLoggedIn: JSON.parse(localStorage.getItem('lg', null) ? localStorage.getItem('lg') : 'false'),
    products: ['shirt'],
    currentActiveDate: new Date() // JSON.parse(localStorage.getItem('crr_date', null) ? localStorage.getItem('crr_date') : new Date())
}