import { atom } from 'recoil';
import productsData from '../assets/data/products.json';

export const currentUserAtom = atom({
    key: "currentUserAtom",
    default: {
        fullname: "",
        email: "",
        phone: "",
        password: "",
        addresses: [],
        location: "",
        starch: "low",
        isLoaded: false,
    }
})

export const productsAtom = atom({
    key: "productsAtom",
    default: productsData.products
});

export const productsBackupAtom = atom({
    key: "productsBackupAtom",
    default: productsData.products
})

export const cartAtom = atom({
    key: "cartAtom",
    default: {
        total_price: 0,
        capacity: 0,
        products: []
    }
});

export const orderAtom = atom({
    key: "orderAtom",
    default: {
        date: "",
        user: "",
        status: "completed",
        cart: {
            total_price: 0,
            capacity: 0,
            products: []
        }
    }
});

