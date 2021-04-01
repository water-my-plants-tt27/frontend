import React, {useState, useContext, useEffect} from 'react'
import styled from 'styled-components'

import { axiosWithAuth } from "../helpers/axiosWithAuth";
import MyPlantDataContext from '../contexts/myPlantDataContext';

// //STYLING
const AddPlantContainer = styled.div`
    width: 40vw;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    position: fixed;
    top: 25%;
    left: 30%;
    background-color: white;
    padding: .9rem 0rem;
    box-shadow: 0px 30px 60px -40px rgba(130, 70, 0, 0.5);
`
const PlantInfoContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center; 
    padding: 6px 0px 6px 20px;
    .editPlantHeader{
        width: 100%;
    }
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

const EditPlant = ({plantId, setEdit}) => {
    const [dayValue, setDayValue] = useState(null);
    const [plantToEdit, setPlantToEdit] = useState([]);
    const plantInfo = useContext(MyPlantDataContext);
    
    console.log('plantInfo from EP', plantInfo)
    // console.log('plant from EP', plant)
    console.log('dayValue', dayValue)
    console.log('plantToEdit ', plantToEdit )
    
    useEffect (() => {
        const plantArr = plantInfo.plantInfo.myPlantData.filter(item => item.my_plant_id === plantId)  
        switch (plantArr[0].week_day_name) {
                case 'Monday':
                     setDayValue(1);
                     break;
                 case 'Tuesday':
                     setDayValue(2);
                     break;
                 case 'Wednesday':
                     setDayValue(3);
                     break;
                 case 'Thursday':
                     setDayValue(4);
                     break;
                 case 'Friday':
                     setDayValue(5);
                     break;
                 case 'Saturday':
                     setDayValue(6);
                     break;
                 case 'Sunday':
                     setDayValue(7);
                     break;
                 default: 
                     setDayValue('RANDOM');
             }
        setPlantToEdit(plantArr[0])
    },[])
    

    const changeHandler = (e) => {
        setDayValue(e.target.value)
    }

    const updatePlant = () => {
        const newPlantData = {
            user_id: plantToEdit.user_id,
            my_plant_id: plantToEdit.my_plant_id,
            week_day_id: Number(dayValue),
        }

        axiosWithAuth()
        .put(`/my-plants/${plantToEdit.my_plant_id}`, newPlantData)
        .then(res => {
            plantInfo.plantInfo.fetchPlants();
            setEdit(false);
            // plantInfo.setMyPlantData(res.data)
            console.log('resPut from EP', res)
        })
        .catch(err => {
            console.log({'errPut from EP': err})
        })
    }

    // const deleter = (id) =>{
    //     console.log('id from EP', id)
    //     plantInfo.plantInfo.setMyPlantData(plantInfo.plantInfo.myPlantData.filter(item => (item.id !== Number(id))))
    // }
    const deletePlant = () => {
        axiosWithAuth()
        .delete(`/my-plants/${plantToEdit.my_plant_id}`)
        .then(res => {
            console.log('resDelete from EP', res)
        })
        .catch(err => {
            console.log({'errDelete from EP': err})
        })
        plantInfo.plantInfo.fetchPlants();
        setEdit(false);
    }

//     //TODO: add class checked to selected options


    console.log('PlantToEdit', plantToEdit)
    return (
        <AddPlantContainer>
            <PlantInfoContainer>
                <div className='editPlantHeader'>
                <div className='plantName'>{plantToEdit.plant_name}</div>
                <div className='plantSpecies'>{plantToEdit.species_name}</div>
                </div>
                <PlantInfo>
                    <div>
                        <div className='needs'>Start Watering</div>
                        <WateringForm onChange={changeHandler}>
                            <div className='dayCheckbox' >
                                <input type="radio" id="monday" name="day" value='1' checked={dayValue == 1}/>
                                <label htmlFor="monday">Monday</label><br/>
                            </div>
                            <div className='dayCheckbox' >
                               <input type="radio" id="tuesday" name="day" value="2" checked={dayValue == 2}/>
                                <label htmlFor="tuesday">Tuesday</label>
                            </div>
                            <div className='dayCheckbox' >
                                <input type="radio" id="Wednesday" name="day" value="3" checked={dayValue == 3}/>
                                <label htmlFor="Wednesday">Wednesday</label>
                            </div>
                            <div className='dayCheckbox' >
                                <input type="radio" id="Thursday" name="day" value="4" checked={dayValue == 4}/>
                                <label htmlFor="Thursday">Thursday</label>
                            </div>
                            <div className='dayCheckbox' >
                                <input type="radio" id="Friday" name="day" value="5" checked={dayValue == 5}/>
                                <label htmlFor="Friday">Friday</label>
                            </div>
                            <div className='dayCheckbox' >
                                <input type="radio" id="Saturday" name="day" value="6" checked={dayValue == 6}/>
                                <label htmlFor="Saturday">Saturday</label>
                            </div>
                            <div className='dayCheckbox' >
                                <input type="radio" id="Sunday" name="day" value="7" checked={dayValue == 7}/>
                                <label htmlFor="Sunday">Sunday</label>
                            </div>
                        </WateringForm>
                    </div>
                    <WaterLightContainer>
                        <div>
                            <div className='needs'> Watering Schedule</div>
                            <div className='needsDetails'>{plantToEdit.water_schedule}</div>
                        </div>
                        <div>
                            <div className='needs'>Light</div>
                            <div className='needsDetails'>{plantToEdit.light_level}</div>
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