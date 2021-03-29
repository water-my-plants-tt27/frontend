import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'

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
        axios.post('https://reqres.in/api/login', loginVal)
        .then((resp)=>{
            console.log(resp)
            setLoginVal(initLoginVal)
        })
        .catch((err)=>{
            console.log(err)
        })
        history.push('/myPlants')

    }
    return (
        <div>
            <div>
                <h1>BUDGE</h1>
                <div className="formContainer">
                    <h3>Log In</h3>
                    <form onSubmit={handleLogin}>
                        <label>
                            <input
                            type="email"
                            name="email"
                            value={loginVal.email}
                            onChange={handleChanges}
                            placeholder="email">
                            </input>
                        </label>
                        <label>
                            <input 
                            type="password"
                            name="password"
                            value={loginVal.password}
                            onChange={handleChanges}
                            placeholder="Password">
                            </input>
                        </label>
                        <div className="btn">
                        <button>Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}


