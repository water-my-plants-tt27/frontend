import React from 'react'
import styled from 'styled-components'
import AddPlant from './AddPlant'

//Styling
const AddPlantDiv = styled.div`
    background-color: white;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0px 47px 0px;
    border-bottom: 2px solid #E5E5E5;
`

const AddPlantForm = styled.form`
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
    margin: 30px 0px 30px 0px;
    border: none;
    border-bottom: 2px solid #224229;
    width: 25vw;
    color: #B1B7B3;
    font-weight: 700;
    font-size: 17px;
    line-height: 23px;

    &:focus {
        outline: none;
    }
`

const CloseAddPlantDiv = styled.div`
    width: 100%;
    padding-right: 30px;
    display: flex;
    justify-content: flex-end;
`

const CloseAddPlantButton = styled.div`
    cursor: pointer;
`

const SearchPlant = (props) => {
    const {toggleAccordion} = props;

    return (
            <AddPlantDiv>
                <CloseAddPlantDiv>
                    <CloseAddPlantButton onClick={()=>toggleAccordion()}>X</CloseAddPlantButton>
                </CloseAddPlantDiv>
                <h1>Search for a Plant</h1>
                <AddPlantForm>
                    <Input list="plants" name="plant" placeholder='Search Plants'/>
                    <datalist id='plants'>
                        <option value='item1'/>
                        <option value='item2'/>
                        <option value='item3'/>
                        <option value='item4'/>
                    </datalist>
                 </AddPlantForm>
                 <AddPlant />
            </AddPlantDiv>
    )
}

export default SearchPlant;