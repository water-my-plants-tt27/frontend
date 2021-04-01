import React from 'react'
import styled from 'styled-components'

import EditPlant from './EditPlant';

//STYLING
const CardContainer = styled.div`
    width: 270px;
    display: flex;
    flex-direction: column;
    background-color: white;
    margin: 15px;
    box-shadow: 0px 30px 60px -40px rgba(130, 70, 0, 0.5);
    overflow: auto;
    .editButton{
        margin-left: 1rem;
        margin-bottom: 1rem;
        color: #CBAD91;
        cursor: pointer;
    }
    .editButton: hover{
        color: #224229;
    }
`

const Image = styled.img`
    max-width: 270px;
    object-fit: contain;
`
const DetailsDiv = styled.div`
    margin: 15px;
`
const WaterLightDetails = styled.div`
    margin-bottom: 15px;
`
const WaterDay = styled.span`
    font-weight: 700;
    font-style: italic;
`

const PlantCard = ({plant, editSet}) => {
    // console.log('PlantCard plant', plant)
    const secondDay = (day) => {
       switch (day) {
            case 'Monday':
                return 'Thursday';
            case 'Tuesday':
                return 'Friday';
            case 'Wednesday':
                return 'Saturday';
            case 'Thursday':
                return 'Sunday';
            case 'Friday':
                return 'Monday';
            case 'Saturday':
                return 'Tuesday';
            case 'Sunday':
                return 'Wednesday';
            default: 
                return '';
        }
    }

    const waterDays = () => {
        if (plant.water_schedule === 'Once per week' || plant.water_schedule === 'Every 14 days') {
            return (
                <WaterDay> - {plant.week_day_name}</WaterDay>
            )
        } else if (plant.water_schedule === 'Twice per week') {
            const day = secondDay(plant.week_day_name)
            return (
                <WaterDay> - {plant.week_day_name} / {day}</WaterDay>
            )
        }
    }

    return (
        <CardContainer>
                <Image src={plant.plant_image} alt={plant.plant_name} />
            <DetailsDiv>
                <div className='plantName'>
                    {plant.plant_name}
                </div>
                <div className='plantSpecies'>
                    {plant.species_name}
                </div>
                <WaterLightDetails>
                    <div className='needs'>Watering Schedule</div>
                    <div className='needsDetails'>{plant.water_schedule}{waterDays()}</div>
                </WaterLightDetails>
                <WaterLightDetails>
                    <div className='needs'>Light</div>
                    <div className='needsDetails'>{plant.light_level}</div>
                </WaterLightDetails>
            </DetailsDiv>
            <div  className='editButton' onClick={() => editSet(plant.my_plant_id)}>Edit Plant</div>
            {/* <details>
                <summary>Edit</summary>
                <EditPlant plant={plant}/>
            </details> */}
            {/* <EditLink /> */}
        </CardContainer>
    )
}

export default PlantCard;