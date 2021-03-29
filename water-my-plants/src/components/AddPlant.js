import React from 'react'
import styled from 'styled-components'

//STYLING
const AddPlantContainer = styled.div`
    width: 50vw;
    display: flex;
    justify-content: flex-start;
    border: 1px solid black;
`

const PlantInfoContainer = styled.div`
    border: 1px solid red;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start; 
    padding: 6px;

`

const WateringForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
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
                <div>
                    <div>
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
                        <div> Watering Schedule</div>
                        <div>Light</div>
                        <button>Add Plant</button>
                    </div>
                </div>
            </PlantInfoContainer>
        </AddPlantContainer>
    )
}

export default AddPlant;