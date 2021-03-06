import React, {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios' 
// import Input from 'react-phone-number-input/input'
import styled from 'styled-components'
import * as yup from 'yup'
import registerFormSchema from '../validation/registerFormSchema'

const initRegValue={
    name:'',
    email:'',
    phone_number:'',
    password: '',
    pwConf: ''
}
export default function Register() {
    const [regValue, setRegValue] = useState(initRegValue);
    const [formErrors, setFormErrors] = useState('');
    const [disabled, setDisabled] = useState(true);
    console.log(formErrors)

    const history = useHistory();

    useEffect(() => {
        if (regValue.password === regValue.pwConf) {
            registerFormSchema.isValid(regValue).then(valid => setDisabled(!valid));
        } else {
            setDisabled(true)
        }
    }, [regValue])
    
    const handleChange=(e)=>{
        yup.reach(registerFormSchema, e.target.name)
            .validate(e.target.value)
            .then(() => {
                setFormErrors({...formErrors, [e.target.name]: ''})
            })
            .catch(err => {
                setFormErrors({...formErrors, [e.target.name]: err.errors[0]})
            })
        
        setRegValue({...regValue, [e.target.name]:e.target.value})
    }

    const onSubmit =(e)=>{
        e.preventDefault();
        const registerUser = {
            name: regValue.name,
            email:regValue.email,
            phone_number:regValue.phone_number,
            password: regValue.password,
        }
        axios.post('https://watermyplantsapi.herokuapp.com/api/auth/register', registerUser)
        .then((resp)=>{
            console.log(resp)
            history.push('/login')
        })
        .catch((err)=>{
            console.log(err.response)
        })
    }

    return (
        <Page>
            <LoginContainer>
                <MainTitle>Water My Plants</MainTitle>
            
                <FormCont className="formContainer">
                    <h1>Register</h1>
                    <Form onSubmit={onSubmit}>
                        <label>  
                            <Input
                            type="text"
                            name="name"
                            value={regValue.name}
                            onChange={handleChange}
                            placeholder="Name*"
                            >
                            </Input>
                        </label>
                        <ErrorDiv>{formErrors.name}</ErrorDiv>

                        <label>  
                            <Input
                            type="email"
                            name="email"
                            value={regValue.email}
                            onChange={handleChange}
                            placeholder="Email*"
                            >
                            </Input>
                        </label>
                        <ErrorDiv>{formErrors.email}</ErrorDiv>
                        {/* <Input 
                        placeholder="Phone Number"
                        country="US"
                        value={regValue.phoneNumber}
                        onChange={handleChange}>
                        
                        </Input> */}
                        <label>  
                            <Input
                            type="text"
                            name="phone_number"
                            value={regValue.phone_number}
                            onChange={handleChange}
                            placeholder="Phone Number*"
                            >
                            </Input>
                        </label>
                        <ErrorDiv>{formErrors.phone_number}</ErrorDiv>
                        <label>
                            <Input
                            type="password"
                            name="password"
                            value={regValue.password}
                            onChange={handleChange}
                            placeholder="Password*"
                            >
                            </Input>
                        </label>
                        <ErrorDiv>{formErrors.password}</ErrorDiv>
                        <label>
                            <Input
                            id="pwConf"
                            type="password"
                            name="pwConf"
                            value={regValue.pwConf}
                            onChange={handleChange}
                            placeholder="Confirm Password*"
                            >
                            </Input>
                        </label>
                        <ErrorDiv>{formErrors.pwConf}</ErrorDiv>
                        {
                            regValue.pwConf ? regValue.pwConf === regValue.password ? null : <ErrorDiv>Passwords do not match</ErrorDiv> : null
                        }
                        <ButtonCont className="btn">
                            <Button disabled={disabled} className='button'>SIGN UP</Button>
                            <LinkCont>
                                <p> Already Have An Account?  </p>
                                <a href='/Login'>  Sign in. </a>
                            </LinkCont>
                        </ButtonCont> 
                    </Form>
                </FormCont>
            </LoginContainer>
        </Page>
    )
}

    
const Page = styled.div`
    background: #224229;
    height: 100vh;
    display: flex;
`

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`

const MainTitle = styled.div`
    padding: 1%;
    border: 4px solid white;
    font-weight: 600;
    font-size: 250%;
    color: white;
    text-align: center;
    width: 32.5%;
    margin: 1%;
    font-family: 'Raleway', sans-serif;

    @media (max-width: 768px) {
    width:52.5%;
    }
    @media (max-width: 375px) {
    width:82.5%;
    }
`

const FormCont = styled.div`
    width: 35%;
    background: #FFFFFF;
    padding: 2% 0%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 768px) {
    width:55%;
    }
    @media (max-width: 375px) {
    width:86%;
    }
    

    h1{
        padding: 1%;
        margin-bottom: 3%;
        
    }
    `

const Input = styled.input`
    border: none;
    border-bottom: 2px solid #224229;
    font-family: PT Serif;
    font-size: 17px;
    font-style: normal;
    font-weight: 700;
    line-height: 23px;
    letter-spacing: 0em;
    color: #224229;
    width: 100%;
    margin: 5% 0%; 

    &:focus {
        outline: none;
    }
    &::placeholder {
        color: #B1B7B3;
    }
`


const ButtonCont = styled.div`
    display: flex;
    @media (max-width: 1296px) {
        flex-wrap: wrap;
    } 
`   
    
    
const LinkCont = styled.div`
    display: flex;
    align-items:flex-end;
    justify-content: flex-end;
    width: 100%;
    
    p{
        font-family: 'Raleway', sans-serif;
        font-size: .8rem;
        padding-right: 1.5%;
        font-family: Raleway;
        font-style: normal;
        font-weight: bold;
        line-height: 16px;
        text-align: right;

        color: #B1B7B3;
    }
    a{
        text-decoration: none;
        font-family: Raleway;
        font-size: .8rem;
        font-style: normal;
        font-weight: 700;
        line-height: 16px;
        letter-spacing: 0em;
        text-align: right;
        color: #224229;
        @media (max-width: 768px) {
            font-size: .75rem;
        }
        @media (max-width: 375px) {
            white-space: nowrap
        }

    }
    `
    const Button = styled.button`
    @media (max-width: 1296px) {
        min-width: 100%;
    } 
    `

    const Form = styled.form`
        display: flex;
        flex-direction: column;
        width:85%; 
    `

const ErrorDiv = styled.div`
    font-size: 14px;
    color: red;
    margin-bottom: 10px;
`