import * as yup from 'yup'
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const registerFormSchema = yup.object().shape({
    name: yup.string()
        .trim()
        .required('Name is required')
        .min(2, 'Name must be 2 or more characters'),
    email: yup.string()
        .email('Must be a valid email address')
        .required('Email is required'),
    phone_number: yup.string()
        .matches(phoneRegExp, 'Phone number is not valid')
        .required('Phone Number is required'),
    password: yup.string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters'),
    pwConf: yup.string()
        .required('Please confirm your password')
})

export default registerFormSchema;