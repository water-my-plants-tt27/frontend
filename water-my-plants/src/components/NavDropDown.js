import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

export default function NavDropDown() {

    // const logout = () => {
    //     localStorage.removeItem('token');
    //     window.location.href = '/login';
    //   }

    return (
        <div className = "NavDropDown">
            {/* <Link to='/myPlants'> My Account </Link>
            <Link to='#'> Settings </Link>
            <Link to='/login'> Logout </Link>  */}
            {/* ^^^ Adjust to use the logout function onClick once the API is set */}
            <ul>
                <li><a href='/myPlants'> My Account </a></li>
                <li><a href='#settings'> Settings </a></li>
                <li><a href='/login'> Logout </a></li>
            </ul>
            
        </div>
    )
}
