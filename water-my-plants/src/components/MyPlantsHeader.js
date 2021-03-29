import React from 'react'
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

    return (
       <>
            <HeaderContainer>
                <h1>My Plants</h1>
                <div>
                    <button>Add a Plant +</button>
                </div>
            </HeaderContainer>
            <AddPlant />
        </>
    )
}

export default MyPlantsHeader;