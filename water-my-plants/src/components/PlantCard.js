import React from 'react'
import styled from 'styled-components'

//STYLING
const CardContainer = styled.div`
    width: 270px;
    display: flex;
    flex-direction: column;
    background-color: white;
    margin: 15px;
    box-shadow: 0px 30px 60px -40px rgba(130, 70, 0, 0.5);
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

const PlantCard = ({plant}) => {

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
                    <div className='needsDetails'>{plant.water_schedule}</div>
                </WaterLightDetails>
                <WaterLightDetails>
                    <div className='needs'>Light</div>
                    <div className='needsDetails'>{plant.light_level}</div>
                </WaterLightDetails>
            </DetailsDiv>
        </CardContainer>
    )
}

export default PlantCard;