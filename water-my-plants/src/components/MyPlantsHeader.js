import React, { useState } from 'react'
import styled from 'styled-components'

//Component Import
import AddPlant from './AddPlant'

//STYLING
const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
`

const MyPlantsHeader = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleAccordion = () => {
        isOpen ? setIsOpen(false) : setIsOpen(true)
    }

    return (
       <>
            <HeaderContainer>
                <h1>My Plants</h1>
                <div>
                    <button onClick={() => toggleAccordion()}>Add a Plant +</button>
                </div>
            </HeaderContainer>
            {
                isOpen ? <AddPlant /> : null
            }
        </>
    )
}

export default MyPlantsHeader;