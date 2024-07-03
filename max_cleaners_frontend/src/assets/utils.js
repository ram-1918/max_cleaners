export const validateData = (data) => {
    const { email, fullname='' } = data;
    let isEmailValid = false;
    let isFullnameValid = false;
    // email valid check
    if (email !== '') {
        // customized conditions
        isEmailValid = true;
    } else if (fullname && fullname.length >= 7) {
        isFullnameValid = true;
    }
    return isEmailValid && isFullnameValid
}

export const roundToTwo = (num) => {
    return +(Math.round(num + "e+2")  + "e-2");
}

export const basedOnPrimary = (a, b) => {
    return a['primary'] < b['primary']
}