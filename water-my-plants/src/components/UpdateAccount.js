import React, {useState} from 'react'
import axios from 'axios';
import styled from 'styled-components';

import LeftBar from './LeftBar';
import NavMenu from './NavMenu';

const NavMenuContainer = styled.div`
    position: absolute;
    z-index: 1;
    right: 0px;
    `
 
const initialUpdatedAccountValues ={
   name: '',
   password: '',
   pwConfirm: '',
   phoneNumber: '',
}
 
const UpdateAccount = () => {
    const [updatedAccountValues, setUpdatedAccountValues] = useState(initialUpdatedAccountValues)

    const changeHandler = (e) => {
        setUpdatedAccountValues({ ...updatedAccountValues,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = () =>{
        axios.put('https://reqres.in/api/updateAccount', updatedAccountValues)
        .then(res => {
            console.log('res from UpdateAccount:', res)
        })
        .catch(err => {
            console.log({'err from UpdateAccount:': err})
        })
    }

   return (
       <div>
            <NavMenuContainer className="navBar">
                <NavMenu/>
            </NavMenuContainer>
            <LeftBar />
           <div className='myAccountHeader'>
               <h1>My Account</h1>
           </div>
               <div className='updateAccountForm'>
                   <h1>Updated Info</h1>
                   <form onSubmit={onSubmit}>
                       <label>Name</label>
                       <input 
                       type='text' 
                       name='name' 
                       value={updatedAccountValues.name}
                       onChange={changeHandler}
                       placeholder='New Name..'
                       />
                       <label>Password</label>
                       <input 
                       type='password' 
                       name='password' 
                       value={updatedAccountValues.password}
                       onChange={changeHandler}
                       placeholder='New Password..'
                       />
                       <label>Confirm Password</label>
                       <input 
                       type='password' 
                       name='pwConfirm' 
                       value={updatedAccountValues.pwConfirm}
                       onChange={changeHandler}
                       placeholder='Confirm New Password..'
                       />
                       <label>Phone Number</label>
                       <input 
                       type='text' 
                       name='phoneNumber' 
                       value={updatedAccountValues.phoneNumber}
                       onChange={changeHandler}
                       placeholder='New Phone Number..'
                       />
                       <button className='btn'> UPDATE </button>
                   </form>
               </div>
       </div>
  
   )
}
 
export default UpdateAccount
