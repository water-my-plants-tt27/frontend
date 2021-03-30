import React, {useState} from 'react'
import menuPlaceholder from '../images/menuPH.png'
import NavDropDown from './NavDropDown'
import styled from 'styled-components'

export default function NavMenu() {
 const [open, setOpen] = useState(false)

    const openNavMenu =() =>{
        setOpen(!open)
    }

    return (
        <div>
            <MenuButton className= "menuButton">
                <img onClick={openNavMenu} src={menuPlaceholder} width="50px" height="40px" alt="Menu Button"/>
                {open ? <NavDropDown/> : null}
            </MenuButton>
        </div>
    )
}

const MenuButton = styled.div`
    
    /* display: flex;
    width: 100%; */
    
  
    
    `
