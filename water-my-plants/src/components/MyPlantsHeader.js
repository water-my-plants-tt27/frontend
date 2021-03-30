import React, {useRef} from 'react'
import styled from 'styled-components'

//Component Import
import SearchPlant from './SearchPlant'

//STYLING
const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
`
const AddPlantButton = styled.div`
    cursor: pointer;
    font-size: 17px;
    color: #CBAD91;

`

const MyPlantsHeader = () => {
    const addPlantRef= useRef(null);

    const toggleAccordion = () => {
        addPlantRef.current.classList.toggle('open')
    }

    return (
       <>
            <HeaderContainer>
                <h1>My Plants</h1>
                <AddPlantButton onClick={() => toggleAccordion()}>
                    Add a Plant +
                </AddPlantButton>
            </HeaderContainer>
            <div ref={addPlantRef} className='accordion'>
                 <SearchPlant toggleAccordion={toggleAccordion}/>
            </div>
        </>
    )
}

export default MyPlantsHeader;