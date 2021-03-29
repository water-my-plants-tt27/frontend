import React from 'react'
import styled from 'styled-components'

//STYLING
const AddPlantContainer = styled.div`
    width: 40vw;
    display: flex;
    justify-content: center;
    border: 1px solid black;
`

const PlantInfoContainer = styled.div`
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    align-items: flex-start; 
    padding: 6px 0px 6px 20px;

`

const PlantInfo = styled.div`
    display: flex;
    justify-content: flex-start;
`

const WateringForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-right: 40px;
`


const AddPlant = () => {

    return (
        <AddPlantContainer>
            <div>
                IMG CONTAINER
            </div>
            <PlantInfoContainer>
                <div className='plantName'>Fiddle Leaf Fig</div>
                <div className='plantSpecies'>Ficus lyrata</div>
                <PlantInfo>
                    <div>
                        <div className='needs'>Start Watering</div>
                        <WateringForm>
                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                            <label for="vehicle1"> I have a bike</label>
                            <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
                            <label for="vehicle2"> I have a car</label>
                            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
                            <label for="vehicle3"> I have a boat</label>
                        </WateringForm>
                    </div>
                    <div>
                        <div className='needs'> Watering Schedule</div>
                        <div className='needs'>Light</div>
                        <button className='button' >Add Plant</button>
                    </div>
                </PlantInfo>
            </PlantInfoContainer>
        </AddPlantContainer>
    )
}

export default AddPlant;