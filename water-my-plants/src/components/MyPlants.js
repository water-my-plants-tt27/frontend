import React from 'react'
import styled from 'styled-components'

//Component Import
import LeftBar from './LeftBar'

//Styling
const MyPlantsContainer = styled.div`
    display: flex;

`

const MyPlants = () => {

    return (
        <MyPlantsContainer>
            <LeftBar />
        </MyPlantsContainer>
    )
}

export default MyPlants;