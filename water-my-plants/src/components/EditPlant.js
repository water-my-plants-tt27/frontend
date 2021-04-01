import React, {useState, useContext} from 'react'
import styled from 'styled-components'

import { axiosWithAuth } from "../helpers/axiosWithAuth";
import MyPlantDataContext from '../contexts/myPlantDataContext';

// //STYLING
const AddPlantContainer = styled.div`
    width: 40vw;
    display: flex;
    justify-content: center;
    margin-top: 30px;
    position: absolute;
    background-color: white;
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
const EditButton = styled.button`
    height: 26px;
    background-color: #548a60;
    padding: 8px;
    color: white;
    font-size: 9px;
    font-weight: 250;
    border: none;
    min-width: 90px;
    font-family: "Raleway", sans-serif;
  }
`;



// 3 issues
// edit opens all cards but when trying to put in the map I believe the jsx doesn't get read properly due to {}
// does not rerender since it is still on current page
// axios calls (delete says error but upon reload plant is gone, put gets back a message as res.data, also unsure should it be plant id or user id)

const EditPlant = ({plant}) => {
    const [dayValue, setDayValue] = useState('');
    const plantInfo = useContext(MyPlantDataContext)

    // console.log('plantInfo from EP', plantInfo)
    // console.log('plant from EP', plant)

    const changeHandler = (e) => {
        setDayValue(e.target.value)
    }

    const updatePlant = () => {
        const newPlantData = {
            user_id: plant.user_id,
            plant_id: plant.my_plant_id,
            week_day_id: Number(dayValue),
        }

        axiosWithAuth()
        .put(`/my-plants/${plant.user_id}`, newPlantData)
        .then(res => {
            // plantInfo.setMyPlantData(res.data)
            console.log('resPut from EP', res)
        })
        .catch(err => {
            console.log({'errPut from EP': err})
        })
    }

    // const deleter = (id) =>{
    //     console.log('id from EP', id)
    //     plantInfo.setMyPlantData(plantInfo.myPlantData(filter(item => (item.id !== Number(id)))))
    // }
    const deletePlant = () => {
        axiosWithAuth()
        .delete(`/my-plants/${plant.my_plant_id}`)
        .then(res => {
            console.log('resDelete from EP', res)
            // deleter(plant.my_plant_id)
        })
        .catch(err => {
            console.log({'errDelete from EP': err})
        })
    }

//     //TODO: add class checked to selected options

    return (
        <AddPlantContainer>
            <PlantInfoContainer>
                <div className='plantName'>{plant.plant_name}</div>
                <div className='plantSpecies'>{plant.species_name}</div>
                <PlantInfo>
                    <div>
                        <div className='needs'>Start Watering</div>
                        <WateringForm onChange={changeHandler}>
                            <div className='dayCheckbox' >
                                <input type="radio" id="monday" name="day" value="1"/>
                                <label htmlFor="monday">Monday</label><br/>
                            </div>
                            <div className='dayCheckbox' >
                               <input type="radio" id="tuesday" name="day" value="2"/>
                                <label htmlFor="tuesday">Tuesday</label>
                            </div>
                            <div className='dayCheckbox' >
                                <input type="radio" id="Wednesday" name="day" value="3"/>
                                <label htmlFor="Wednesday">Wednesday</label>
                            </div>
                            <div className='dayCheckbox' >
                                <input type="radio" id="Thursday" name="day" value="4"/>
                                <label htmlFor="Thursday">Thursday</label>
                            </div>
                            <div className='dayCheckbox' >
                                <input type="radio" id="Friday" name="day" value="5"/>
                                <label htmlFor="Friday">Friday</label>
                            </div>
                            <div className='dayCheckbox' >
                                <input type="radio" id="Saturday" name="day" value="6"/>
                                <label htmlFor="Saturday">Saturday</label>
                            </div>
                            <div className='dayCheckbox' >
                                <input type="radio" id="Sunday" name="day" value="7"/>
                                <label htmlFor="Sunday">Sunday</label>
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
                        <EditButton onClick={updatePlant}>Update Plant</EditButton>
                        <EditButton onClick={deletePlant}>Delete Plant</EditButton>
                    </WaterLightContainer>
                </PlantInfo>
            </PlantInfoContainer>
        </AddPlantContainer>
    )
}

export default EditPlant;