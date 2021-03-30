import React, { useState } from 'react'
import styled from 'styled-components'

//Component Import
import AddPlant from './AddPlant'
import PlantCard from './PlantCard'

//Styling
const AddPlantDiv = styled.div`
    background-color: white;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0px 47px 0px;
    border-bottom: 2px solid #E5E5E5;
`
const AddPlantForm = styled.form`
    display: flex;
    flex-direction: column;
`
const Input = styled.input`
    margin: 30px 0px 30px 0px;
    border: none;
    border-bottom: 2px solid #224229;
    width: 25vw;
    color: #B1B7B3;
    font-weight: 700;
    font-size: 17px;
    line-height: 23px;

    &:focus {
        outline: none;
    }
`
const CloseAddPlantDiv = styled.div`
    width: 100%;
    padding-right: 30px;
    display: flex;
    justify-content: flex-end;
`
const CloseAddPlantButton = styled.div`
    cursor: pointer;
`

// DUMMY DATA
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


const SearchPlant = (props) => {
    const {toggleAccordion} = props;

    const [searchValue, setSearchValue] = useState('')

    const handleChange = (e) => {
        setSearchValue(e.target.value)
    }

    return (
            <AddPlantDiv>
                <CloseAddPlantDiv>
                    <CloseAddPlantButton onClick={()=>toggleAccordion()}>X</CloseAddPlantButton>
                </CloseAddPlantDiv>
                <h1>Search for a Plant</h1>
                <AddPlantForm>
                    <Input list="plants" name="plant" placeholder='Search Plants' onChange={handleChange}/>
                    <datalist id='plants'>
                        {
                            fakePlantData.map((plant) => {
                                return(
                                    <option className='options' value={plant.plant_name}/>
                                )
                            })
                        }
                    </datalist>
                 </AddPlantForm>
                 <AddPlant />
            </AddPlantDiv>
    )
}

export default SearchPlant;