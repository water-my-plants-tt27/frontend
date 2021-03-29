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