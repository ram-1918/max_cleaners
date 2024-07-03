export function validateFullname(fullname, setError) {
    const len = fullname.length;
    const validChars = [".", "_", "-", "'", "@", " "];
    const regex = /[a-zA-Z0-9]/;

    const isValid = [...fullname].map(c => validChars.includes(c) || regex.test(c));
    if(len <= 3 || len > 15 || isValid.some(c => c === false)) {
        setError(prev => ({...prev, 'fullname': true}));
    } else {
        setError(prev => ({...prev, 'fullname': false}));
    }
    return fullname;
}

export function validateEmail(email, setError) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!regex.test(email)) {
        setError(prev => ({...prev, 'email': true}));
    } else {
        setError(prev => ({...prev, 'email': false}));
    }
    return email;
}

export function validatePhone(phone, setError) {
    const regex = /^[0-9]{3}\-[0-9]{3}-[0-9]{4}/;
    if(!regex.test(phone)) {
        setError(prev => ({...prev, 'phone': true}));
    } else {
        setError(prev => ({...prev, 'phone': false}));
    }
    return phone;
}