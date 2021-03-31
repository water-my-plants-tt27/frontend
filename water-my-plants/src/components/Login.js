import React, {useState} from 'react'
import {useHistory, Link} from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

const initLoginVal = {
    email: '',
    password: ''
}

export default function Login() {
    const [loginVal, setLoginVal]=useState(initLoginVal);
    const history = useHistory();

    const handleChanges = e =>{
        setLoginVal({
            ...loginVal, [e.target.name]:e.target.value
        })
    }

    const handleLogin = e => {
        e.preventDefault();
        axios.post('https://watermyplantsapi.herokuapp.com/api/auth/login', loginVal)
        .then((resp)=>{
            console.log(resp)
            setLoginVal(initLoginVal)
            history.push('/myPlants')
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
                    <h1>Account Login</h1>
                    <form onSubmit={handleLogin}>
                        <Label>
                            <Input
                            type="email"
                            name="email"
                            value={loginVal.email}
                            onChange={handleChanges}
                            placeholder="Email">
                            </Input>
                        </Label>
                        <Label>
                            <Input 
                            type="password"
                            name="password"
                            value={loginVal.password}
                            onChange={handleChanges}
                            placeholder="Password">
                            </Input>
                        </Label>
                        <ButtonCont className="btn">
                            <button className='button'>LOGIN</button>
                            <LinkCont>
                                <a href='#'> Forgot Password  </a>
                                <div> | </div>
                                <a href='/register'>  Create Account </a>
                            </LinkCont>
                        </ButtonCont>

                    </form>
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
`

const FormCont = styled.div`
    width: 35%;
    background: #FFFFFF;
    padding: 2% 0%;
    display: flex;
    flex-direction: column;
    align-items: center;

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
    text-align: left;
    color: #224229;
    width: 100%;
    margin: 5% 0%;
`

const Label = styled.label`
`

const ButtonCont = styled.div`
    display: flex;`
    
    
const LinkCont = styled.div`
    display: flex;
    align-items:flex-end;
    justify-content: flex-end;
    width: 100%;
    div{
        width: 2%;
        text-align: center;
        padding: 0% 1%;
    }
    a{
        text-decoration: none;
        color: #B1B7B3;
        font-family: Raleway;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 16px;
        letter-spacing: 0em;
        text-align: right;
        font-family: 'Raleway', sans-serif;

    }
    `