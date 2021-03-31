import React, {useState, useContext} from 'react'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components';
import UserContext from '../contexts/userContext'

import LeftBar from './LeftBar';
import NavMenu from './NavMenu';

import {axiosWithAuth} from '../helpers/axiosWithAuth'

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
    color: #224229;
    font-weight: 700;
    font-size: 17px;
    line-height: 23px;
    &:focus {
        outline: none;
    }

    &::placeholder {
        color: #B1B7B3;
    }
`
 

const UpdateAccount = () => {
    const {userInfo} = useContext(UserContext)

    const initialUpdatedAccountValues ={
        user_id: userInfo.user.user_id,
       name: userInfo.user.name,
       email: userInfo.user.email,
    //    password: '',
    //    pwConfirm: '',
       phone_number: userInfo.user.phone_number,
    }
    const [updatedAccountValues, setUpdatedAccountValues] = useState(initialUpdatedAccountValues)
    
    const history = useHistory();

    const changeHandler = (e) => {
        setUpdatedAccountValues({ ...updatedAccountValues,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        const id = updatedAccountValues.user_id
        axiosWithAuth()
            .put(`users/${id}`, updatedAccountValues)
            .then(res => {
                userInfo.setUser(res.data.updatedUser)
                history.push('/myPlants')
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
                            {/* <Input 
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
                            /> */}
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
