import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios';
import styled from 'styled-components';
import UserContext from '../contexts/userContext'

import LeftBar from './LeftBar';
import NavMenu from './NavMenu';

//STYLING
const MyAccountContainer = styled.div`
    display: flex;
`
const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
`
const NavMenuContainer = styled.div`
    position: absolute;
    z-index: 1;
    right: 0px;
    `
const AccountInfoBody = styled.div`
    width: 100%;
    background-color: #FBF9F3;
    padding-top: 25px;
`
const UpdateInfoDiv = styled.div`
    background-color: white;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0px 47px 0px;
    border-bottom: 2px solid #E5E5E5;
`
const UpdateInfoForm = styled.form`
    display: flex;
    flex-direction: column;
`
const Input = styled.input`
    margin: 18px 0px 20px 0px;
    border: none;
    border-bottom: 2px solid #224229;
    width: 25vw;
    color: #B1B7B3;
    font-weight: 700;
    font-size: 17px;
    line-height: 23px;

    &:focus {
        outline: none;
        color: #224229;
    }
`
 

const UpdateAccount = () => {
    const {userInfo} = useContext(UserContext)
    console.log('userInfo from context', userInfo)
    const initialUpdatedAccountValues ={
       name: userInfo.user.name,
       password: '',
       pwConfirm: '',
       phone_number: userInfo.user.phone_number,
    }
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
       <MyAccountContainer>
            <NavMenuContainer className="navBar">
                <NavMenu/>
            </NavMenuContainer>
            <LeftBar />
               <AccountInfoBody className='updateAccountForm'>
                    <HeaderContainer>
                        <h1>My Account</h1>
                    </HeaderContainer>
                    <UpdateInfoDiv>
                        <h1>Update Info</h1>
                        <UpdateInfoForm onSubmit={onSubmit}>
                            <Input 
                            type='text' 
                            name='name' 
                            value={updatedAccountValues.name}
                            onChange={changeHandler}
                            placeholder='Name'
                            />
                            <Input 
                            type='password' 
                            name='password' 
                            value={updatedAccountValues.password}
                            onChange={changeHandler}
                            placeholder='Password'
                            />
                            <Input 
                            type='password' 
                            name='pwConfirm' 
                            value={updatedAccountValues.pwConfirm}
                            onChange={changeHandler}
                            placeholder='Confirm Password'
                            />
                            <Input 
                            type='text' 
                            name='phone_number' 
                            value={updatedAccountValues.phone_number}
                            onChange={changeHandler}
                            placeholder='Phone Number'
                            />
                            <button className='button'> UPDATE </button>
                        </UpdateInfoForm>
                    </UpdateInfoDiv>
               </AccountInfoBody>
       </MyAccountContainer>
  
   )
}
 
export default UpdateAccount
