import React from 'react'
import styled from 'styled-components'
import MyPlantsHeader from './MyPlantsHeader'

//Styling
const AddPlantDiv = styled.div`
    background-color: white;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 40px 0px 47px 0px;
`

const AddPlant = () => {

    return (
        <div>
            <AddPlantDiv>
                <h1>Search for a Plant</h1>
                <form>
                    <input list="plants" name="plant"/>
                    <datalist id='plants'>
                        <option value='item1'/>
                        <option value='item2'/>
                        <option value='item3'/>
                        <option value='item4'/>
                    </datalist>
                    <button>Add Plant</button>
                 </form>
            </AddPlantDiv>
        </div>
    )
}

export default AddPlant;