import React, { useState, useContext } from 'react';
import styled from 'styled-components';

import { axiosWithAuth } from '../helpers/axiosWithAuth';
import UserContext from '../contexts/userContext';
import MyPlantDataContext from '../contexts/myPlantDataContext';

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

const AddPlant = ({plant, handleClose}) => {
    const [dayValue, setDayValue] = useState('');
    const {userInfo} = useContext(UserContext);
    const plantInfo = useContext(MyPlantDataContext)

    const changeHandler = (e) => {
        setDayValue(e.target.value)
    }

    const submitter = (e) => {
        e.preventDefault();
        const newPlantData = {
            user_id: userInfo.user.user_id,
            plant_id: plant.plant_id,
            week_day_id: Number(dayValue),
        }
  
        axiosWithAuth()
            .post(`/my-plants`, newPlantData)
            .then(res => {
                plantInfo.fetchPlants();
                handleClose();
            })
            .catch(err => {console.log({'AddPlant err:': err})})
    }

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
                        <WateringForm onChange={changeHandler}>
                            <div className='dayCheckbox' >
                                <input type="radio" id="monday" name="day" value='1'/>
                                <label htmlFor="monday">Monday</label><br/>
                            </div>
                            <div className='dayCheckbox' >
                               <input type="radio" id="tuesday" name="day" value="2"/>
                                <label htmlFor="tuesday">Tuesday</label>
                            </div>
                            <div className='dayCheckbox' >
                                <input type="radio" id="wednesday" name="day" value="3"/>
                                <label htmlFor="wednesday">Wednesday</label>
                            </div>
                            <div className='dayCheckbox' >
                                <input type="radio" id="thursday" name="day" value="4"/>
                                <label htmlFor="thursday">Thursday</label>
                            </div>
                            <div className='dayCheckbox' >
                                <input type="radio" id="friday" name="day" value="5"/>
                                <label htmlFor="friday">Friday</label>
                            </div>
                            <div className='dayCheckbox' >
                                <input type="radio" id="saturday" name="day" value="6"/>
                                <label htmlFor="saturday">Saturday</label>
                            </div>
                            <div className='dayCheckbox' >
                                <input type="radio" id="sunday" name="day" value="7"/>
                                <label htmlFor="sunday">Sunday</label>
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
                        <button className='button' onClick={submitter}>Add Plant</button>
                    </WaterLightContainer>
                </PlantInfo>
            </PlantInfoContainer>
        </AddPlantContainer>
    )
}

export default AddPlant;