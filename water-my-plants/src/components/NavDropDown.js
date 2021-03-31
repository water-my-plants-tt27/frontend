import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

export default function NavDropDown() {

    const logout = () => {
        localStorage.removeItem('token');
        window.location.href = '/login';
      }

    return (
        <NavDropCont className = "NavDropDown">
            {/* <Link to='/login'> Logout </Link>  */}
            {/* ^^^ Adjust to use the logout function onClick once the API is set */}
            {/* <h6> X </h6> */}
            <ul>
                <li><Link to='/updateAccount'> My Account </Link></li>
                <li><Link to='#'> Settings </Link></li>
                <li onClick={logout}>Logout</li>
            </ul>
            
        </NavDropCont>
    )
}

const NavDropCont = styled.div`
    background: #224229;
    
    font-size: 1.5rem;
    width: 264px;
   

    /* h6{
        color: white;
        position:relative;
        right: 0px;
    } */

    ul{
        display:flex;
        flex-direction:column;
        padding: 3% 0%;
        
        li{
            padding: 4%;
            display: flex;
            justify-content: space-between;
            color:white;
            text-decoration: none;
            cursor: pointer;
            a{
                color:white;
                text-decoration: none;
            }
        }
    }
    `
