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




const AddPlant = ({plant}) => {

    //TODO: add class checked to selected options

    return (
        <AddPlantContainer>
            <div>
                <PlantImg src={plant.plant_image} alt={plant.plant_name} />
                <div>Upload Custom Image</div>
            </div>
            <PlantInfoContainer>
                <div className='plantName'>{plant.plant_name}</div>
                <div className='plantSpecies'>{plant.species_name}</div>
                <PlantInfo>
                    <div>
                        <div className='needs'>Start Watering</div>
                        <WateringForm>
                            <div className='dayCheckbox' >
                                <input type="radio" id="monday" name="day" value="monday"/>
                                <label for="monday">Monday</label><br/>
                            </div>
                            <div className='dayCheckbox' >
                               <input type="radio" id="tuesday" name="day" value="tuesday"/>
                                <label for="tuesday">Tuesday</label>
                            </div>
                            <div className='dayCheckbox' >
                                <input type="radio" id="Wednesday" name="day" value="Wednesday"/>
                                <label for="Wednesday">Wednesday</label>
                            </div>
                            <div className='dayCheckbox' >
                                <input type="radio" id="Thursday" name="day" value="Thursday"/>
                                <label for="Thursday">Thursday</label>
                            </div>
                            <div className='dayCheckbox' >
                                <input type="radio" id="Friday" name="day" value="Friday"/>
                                <label for="Friday">Friday</label>
                            </div>
                            <div className='dayCheckbox' >
                                <input type="radio" id="Saturday" name="day" value="Saturday"/>
                                <label for="Saturday">Saturday</label>
                            </div>
                            <div className='dayCheckbox' >
                                <input type="radio" id="Sunday" name="day" value="Sunday"/>
                                <label for="Sunday">Sunday</label>
                            </div>
                        </WateringForm>
                    </div>
                    <WaterLightContainer>
                        <div>
                            <div className='needs'> Watering Schedule</div>
                            <div className='needsDetails'>{plant.water_schedule}</div>
                        </div>
                        <div>
                            <div className='needs'>Light</div>
                            <div className='needsDetails'>{plant.light_level}</div>
                        </div>
                        <button className='button'>Add Plant</button>
                    </WaterLightContainer>
                </PlantInfo>
            </PlantInfoContainer>
        </AddPlantContainer>
    )
}

export default AddPlant;