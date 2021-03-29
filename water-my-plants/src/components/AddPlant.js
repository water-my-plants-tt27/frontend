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
    margin-right: 40px;
`


const AddPlant = () => {

    //TODO: add class checked to selected options

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
                            <div className='dayCheckbox' >
                                <input type="checkbox" id="monday" name="monday" value="monday"/>
                                <label for="monday">Monday</label><br/>
                            </div>
                            <div className='dayCheckbox' >
                               <input type="checkbox" id="tuesday" name="tuesday" value="tuesday"/>
                                <label for="tuesday">Tuesday</label>
                            </div>
                            <div className='dayCheckbox' >
                                <input type="checkbox" id="Wednesday" name="Wednesday" value="Wednesday"/>
                                <label for="Wednesday">Wednesday</label>
                            </div>
                            <div className='dayCheckbox' >
                                <input type="checkbox" id="Thursday" name="Thursday" value="Thursday"/>
                                <label for="Thursday">Thursday</label>
                            </div>
                            <div className='dayCheckbox' >
                                <input type="checkbox" id="Friday" name="Friday" value="Friday"/>
                                <label for="Friday">Friday</label>
                            </div>
                            <div className='dayCheckbox' >
                                <input type="checkbox" id="Saturday" name="Saturday" value="Saturday"/>
                                <label for="Saturday">Saturday</label>
                            </div>
                            <div className='dayCheckbox' >
                                <input type="checkbox" id="Sunday" name="Sunday" value="Sunday"/>
                                <label for="Sunday">Sunday</label>
                            </div>
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