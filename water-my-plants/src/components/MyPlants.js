import React from 'react'
import styled from 'styled-components'

//Component Import
import LeftBar from './LeftBar'
import AddPlant from './AddPlant'

//Styling
const MyPlantsContainer = styled.div`
    display: flex;

`
const MyPlantsBody = styled.div`
    width: 100%;
    background-color: #FBF9F3;
    padding-top: 75px;

`

const MyPlants = () => {

    return (
        <MyPlantsContainer>
            <LeftBar />
            <MyPlantsBody>
                <AddPlant />
            </MyPlantsBody>
        </MyPlantsContainer>
    )
}

export default MyPlants;