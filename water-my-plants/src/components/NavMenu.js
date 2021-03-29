import React, {useState} from 'react'
import menuPlaceholder from '../images/menuPH.png'
import NavDropDown from './NavDropDown'

export default function NavMenu() {
 const [open, setOpen] = useState(false)

    const openNavMenu =() =>{
        setOpen(!open)
    }

    return (
        <div>
            <div className= "menuButton">
                <img onClick={openNavMenu} src={menuPlaceholder} width="50px" height="40px" alt="Menu Button"/>
                {open ? <NavDropDown/> : null}
            </div>
        </div>
    )
}
