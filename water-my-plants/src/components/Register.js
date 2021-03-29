import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios' 
import Input from 'react-phone-number-input/input'
// import styled from 'styled-components'

const initRegValue={
    name:'',
    email:'',
    phoneNumber:'',
    password: '',
    pwConfirm: ''
}
export default function Register() {
    const [regValue, setRegValue] = useState(initRegValue)
    const history = useHistory();
    
    const handleChange=(e)=>{
        setRegValue({...regValue, [e.target.name]:e.target.value})

    }

    const onSubmit =(e)=>{
        e.preventDefault();
        axios.post('https://reqres.in/api/register', regValue)
        .then((resp)=>{
            console.log(resp)
        })
        .catch((err)=>{
            console.log(err)
        })
        history.push('/login')
    }

    return (
        <div>
            <div>
            <h1>Register</h1>
            <div className="formContainer">
                <h3>Sign-Up</h3>
                <form onSubmit={onSubmit}>
                    <label>  
                        <input
                        type="text"
                        name="name"
                        value={regValue.name}
                        onChange={handleChange}
                        placeholder="Name"
                        >
                        </input>
                    </label>
                    <label>  
                        <input
                        type="email"
                        name="email"
                        value={regValue.email}
                        onChange={handleChange}
                        placeholder="Email"
                        >
                        </input>
                    </label>
                    {/* <Input 
                    placeholder="Phone Number"
                    country="US"
                    value={regValue.phoneNumber}
                    onChange={handleChange}>
                    
                    </Input> */}
                    <label>  
                        <input
                        type="text"
                        name="phoneNumber"
                        value={regValue.phoneNumber}
                        onChange={handleChange}
                        placeholder="Phone Number"
                        >
                        </input>
                    </label>
                    <label>
                        <input
                        type="password"
                        name="password"
                        value={regValue.password}
                        onChange={handleChange}
                        placeholder="Password"
                        >
                        </input>
                    </label>
                    <label>
                        <input
                        type="password"
                        name="pwConf"
                        value={regValue.pwConf}
                        onChange={handleChange}
                        placeholder="Confirm Password"
                        >
                        </input></label>
                    <div className="btn">
                        <button>Sign up</button>
                    </div>    
                </form>
            </div>
            </div>
        </div>
    )
}

    
