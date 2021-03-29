import React from 'react'
import {Link} from 'react-router-dom'

export default function NavDropDown() {

    // const logout = () => {
    //     localStorage.removeItem('token');
    //     window.location.href = '/login';
    //   }

    return (
        <div className = "NavDropDown">
            <Link to='/myPlants'> My Account </Link>
            <Link to='#'> Settings </Link>
            <Link to='/login'> Logout </Link> 
            {/* ^^^ Adjust to use the logout function onClick once the API is set */}
            
        </div>
    )
}
