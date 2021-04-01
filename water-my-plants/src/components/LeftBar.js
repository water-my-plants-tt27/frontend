import React from 'react'
import styled from 'styled-components'

//Styling
const BarContainer = styled.div`
    width: 12%;
    height: 100vh;
    background-color: #224229;
    padding: 20px;
`

const Logo = styled.div`
    padding: 12px;
    border: 4px solid white;
    font-weight: 600;
    font-size: 250%;
    color: white;
    font-family: 'Raleway', sans-serif;
    @media (max-width: 1256px) {
        font-size: 200%;
    }
    @media (max-width: 1021px) {
        font-size: 150%;
    }
    @media (max-width: 815px) {
        font-size: 100%;
    }
    @media (max-width: 650px) {
        font-size: 100%;
        padding: 3px;
    }
    @media (max-width: 520px) {
        font-size: 75%;
        padding: 3px;
        border: 3px solid white;
    }
    @media (max-width: 400px) {
        font-size: 50%;
        padding: 3px;
        border: 2px solid white;
    }
    @media (max-width: 300px) {
        font-size: 40%;
        padding: 3px;
    }
`

const LeftBar = () => {
    return (
        <BarContainer>
            <Logo>
                Water My Plants
            </Logo>
        </BarContainer>
    )
}

export default LeftBar;