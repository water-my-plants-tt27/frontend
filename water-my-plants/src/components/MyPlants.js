import React from 'react'
import styled from 'styled-components'

//Component Import
import LeftBar from './LeftBar'
import MyPlantsHeader from './MyPlantsHeader'
import PlantCard from './PlantCard'

//Styling
const MyPlantsContainer = styled.div`
    display: flex;

`
const MyPlantsBody = styled.div`
    width: 100%;
    background-color: #FBF9F3;
    padding-top: 25px;
`
const Plants = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`

const fakePlantData = [
 {
     plant_id: 1,
     plant_name: 'Fiddle Leaf Fig',
     species_name: 'Ficus lyrata',
     water_schedule: 'Once per week',
     light_level: 'low indirect light',
     plant_image: 'https://bloomscape.com/wp-content/uploads/2020/08/bloomscape_fiddle-leaf-fig_charcoal-alt.jpg?ver=279576'
 },   
 {
     plant_id: 2,
     plant_name: 'Fiddle Leaf Fig 2',
     species_name: 'Ficus lyrata',
     water_schedule: 'Once per week',
     light_level: 'low indirect light',
     plant_image: 'https://bloomscape.com/wp-content/uploads/2020/08/bloomscape_fiddle-leaf-fig_charcoal-alt.jpg?ver=279576'
 },   
 {
     plant_id: 3,
     plant_name: 'Fiddle Leaf Fig 3',
     species_name: 'Ficus lyrata',
     water_schedule: 'Once per week',
     light_level: 'low indirect light',
     plant_image: 'https://bloomscape.com/wp-content/uploads/2020/08/bloomscape_fiddle-leaf-fig_charcoal-alt.jpg?ver=279576'
 },   
 {
     plant_id: 4,
     plant_name: 'Fiddle Leaf Fig 4',
     species_name: 'Ficus lyrata',
     water_schedule: 'Once per week',
     light_level: 'low indirect light',
     plant_image: 'https://bloomscape.com/wp-content/uploads/2020/08/bloomscape_fiddle-leaf-fig_charcoal-alt.jpg?ver=279576'
 },   
 {
     plant_id: 5,
     plant_name: 'Fiddle Leaf Fig 5',
     species_name: 'Ficus lyrata',
     water_schedule: 'Once per week',
     light_level: 'low indirect light',
     plant_image: 'https://bloomscape.com/wp-content/uploads/2020/08/bloomscape_fiddle-leaf-fig_charcoal-alt.jpg?ver=279576'
 },   
 {
     plant_id: 6,
     plant_name: 'Fiddle Leaf Fig 6',
     species_name: 'Ficus lyrata',
     water_schedule: 'Once per week',
     light_level: 'low indirect light',
     plant_image: 'https://bloomscape.com/wp-content/uploads/2020/08/bloomscape_fiddle-leaf-fig_charcoal-alt.jpg?ver=279576'
 },   
 {
     plant_id: 7,
     plant_name: 'Fiddle Leaf Fig 7',
     species_name: 'Ficus lyrata',
     water_schedule: 'Once per week',
     light_level: 'low indirect light',
     plant_image: 'https://bloomscape.com/wp-content/uploads/2020/08/bloomscape_fiddle-leaf-fig_charcoal-alt.jpg?ver=279576'
 },   
]

const MyPlants = () => {

    return (
        <MyPlantsContainer>
            <LeftBar />
            <MyPlantsBody>
                <MyPlantsHeader />
                <Plants>
                    {
                        fakePlantData.map((plant) => {
                            return <PlantCard plant={plant} />
                        })
                    }
                </Plants>
            </MyPlantsBody>
        </MyPlantsContainer>
    )
}

export default MyPlants;