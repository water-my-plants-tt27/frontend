import React from 'react'
import styled from 'styled-components'

//STYLING
const AddPlantContainer = styled.div`
    width: 40vw;
    display: flex;
    justify-content: center;
    margin-top: 30px;
`
const PlantImg = styled.img`
    object-fit: contain;
    max-width: 224px;
`
const PlantInfoContainer = styled.div`
    width: 100%;
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
const WaterLightContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`




const AddPlant = () => {

    //TODO: add class checked to selected options

    return (
        <AddPlantContainer>
            <div>
                <PlantImg src="https://bloomscape.com/wp-content/uploads/2020/08/bloomscape_fiddle-leaf-fig_charcoal-alt.jpg?ver=279576" alt='plant' />
                <div>Upload Custom Image</div>
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
                    <WaterLightContainer>
                        <div>
                            <div className='needs'> Watering Schedule</div>
                            <div className='needsDetails'>Once Per Week</div>
                        </div>
                        <div>
                            <div className='needs'>Light</div>
                            <div className='needsDetails'>Medium - Bright inderect light</div>
                        </div>
                        <button className='button' >Add Plant</button>
                    </WaterLightContainer>
                </PlantInfo>
            </PlantInfoContainer>
        </AddPlantContainer>
    )
}

export default AddPlant;