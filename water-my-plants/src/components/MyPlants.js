import React from 'react'
import styled from 'styled-components'

//Component Import
import LeftBar from './LeftBar'
import MyPlantsHeader from './MyPlantsHeader'

//Styling
const MyPlantsContainer = styled.div`
    display: flex;

`
const MyPlantsBody = styled.div`
    width: 100%;
    background-color: #FBF9F3;
    padding-top: 25px;
`

const MyPlants = () => {

    return (
        <MyPlantsContainer>
            <LeftBar />
            <MyPlantsBody>
                <MyPlantsHeader />
            </MyPlantsBody>
        </MyPlantsContainer>
    )
}

export default MyPlants;