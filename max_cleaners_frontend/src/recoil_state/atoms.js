import { atom } from 'recoil';
import productsData from '../assets/data/products.json';
import { cart_initial_data, initial_order_data, initial_order_session_info, schedule_initial_data, user_initial_data } from './initial_data';
import { retrieve_from_local } from '../assets/utils';

export const isLoggedInAtom = atom({
    key: "isLoggedInAtom",
    default: retrieve_from_local('lg') ? retrieve_from_local('lg') : false
});

export const currentUserIdAtom = atom({
    key: "currentUserIdAtom",
    default: retrieve_from_local('userid') ? retrieve_from_local('userid'): ""
});

export const currentUserAtom = atom({
    key: "currentUserAtom",
    default: retrieve_from_local('user') ? retrieve_from_local('user') : user_initial_data
});

export const selectedScheduleAtom = atom({
    key: 'selectedScheduleAtom',
    default: retrieve_from_local('schedule') ? retrieve_from_local('schedule') : schedule_initial_data
})

export const productsAtom = atom({
    key: "productsAtom",
    default: retrieve_from_local('products') ? retrieve_from_local('products') : productsData.products
});

export const productsBackupAtom = atom({
    key: "productsBackupAtom",
    default: productsData.products
})

export const cartAtom = atom({
    key: "cartAtom",
    default: retrieve_from_local('cart') ? retrieve_from_local('cart') : cart_initial_data
});

export const orderItemAtom = atom({
    key: "orderItemAtom",
    default: retrieve_from_local('checkout') ? retrieve_from_local('checkout') : initial_order_data
});

export const ordersListAtom = atom({
    key: 'ordersListAtom',
    default: retrieve_from_local('orders') ? retrieve_from_local('orders') : []
});

export const activeOrderSessionAtom = atom({
    key: 'activeOrderSessionAtom',
    default: retrieve_from_local('session') ? retrieve_from_local('session') : initial_order_session_info
});
export const errorAtom = atom({
    key: 'errorAtom',
    default: ""
});
