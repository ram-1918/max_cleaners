export const initial_data_login = {
    email: '',
    password: ''
};

export const initial_data_register = {
    fullname: '',
    email: '',
    password: '',
    password2: ''
};

export const input_field_mapper_login = [
    {
        idx: 1,
        type: 'text',
        label: 'Email',
        value: 'email',
        placeholder: "Enter your email..."
    },
    {
        idx: 2,
        type: 'password',
        label: 'Password',
        value: 'password',
        placeholder: "Enter your password..."
    }
];

export const input_field_mapper_register = [
    {
        idx: 1,
        type: 'text',
        label: 'fullname',
        value: 'fullname',
        placeholder: "Enter your fullname..."
    },
    {
        idx: 2,
        type: 'email',
        label: 'email',
        value: 'email',
        placeholder: "Enter your email..."
    },
    {
        idx: 3,
        type: 'password',
        label: 'Password',
        value: 'password',
        placeholder: "Enter your password..."
    },
    {
        idx: 4,
        type: 'password',
        label: 'Re-enter Password',
        value: 'password2',
        placeholder: "Re-enter your password..."
    }
]