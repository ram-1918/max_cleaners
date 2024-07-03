import { atom } from 'recoil';

export const currentUserAtom = atom({
    key: "currentUser",
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