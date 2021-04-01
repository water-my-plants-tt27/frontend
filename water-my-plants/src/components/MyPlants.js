import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'

//Component Import
import {axiosWithAuth} from '../helpers/axiosWithAuth';
import LeftBar from './LeftBar';
import MyPlantsHeader from './MyPlantsHeader';
import NavMenu from './NavMenu';
import PlantCard from './PlantCard'
import UserContext from '../contexts/userContext';
import MyPlantDataContext from '../contexts/myPlantDataContext';
import EditPlant from './EditPlant';

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
//Positioning for the navMenu
const NavMenuContainer = styled.div`
    position: absolute;
    z-index: 1;
    right: 0px;
`
// const fakePlantData = [
//  {
//      plant_id: 1,
//      plant_name: 'Fiddle Leaf Fig',
//      species_name: 'Ficus lyrata',
//      water_schedule: 'Once per week',
//      light_level: 'low indirect light',
//      plant_image: 'https://bloomscape.com/wp-content/uploads/2020/08/bloomscape_fiddle-leaf-fig_charcoal-alt.jpg?ver=279576'
//  },   
//  {
//      plant_id: 2,
//      plant_name: 'Fiddle Leaf Fig 2',
//      species_name: 'Ficus lyrata',
//      water_schedule: 'Once per week',
//      light_level: 'low indirect light',
//      plant_image: 'https://bloomscape.com/wp-content/uploads/2020/08/bloomscape_fiddle-leaf-fig_charcoal-alt.jpg?ver=279576'
//  },   
//  {
//      plant_id: 3,
//      plant_name: 'Fiddle Leaf Fig 3',
//      species_name: 'Ficus lyrata',
//      water_schedule: 'Once per week',
//      light_level: 'low indirect light',
//      plant_image: 'https://bloomscape.com/wp-content/uploads/2020/08/bloomscape_fiddle-leaf-fig_charcoal-alt.jpg?ver=279576'
//  },   
//  {
//      plant_id: 4,
//      plant_name: 'Fiddle Leaf Fig 4',
//      species_name: 'Ficus lyrata',
//      water_schedule: 'Once per week',
//      light_level: 'low indirect light',
//      plant_image: 'https://bloomscape.com/wp-content/uploads/2020/08/bloomscape_fiddle-leaf-fig_charcoal-alt.jpg?ver=279576'
//  },   
//  {
//      plant_id: 5,
//      plant_name: 'Fiddle Leaf Fig 5',
//      species_name: 'Ficus lyrata',
//      water_schedule: 'Once per week',
//      light_level: 'low indirect light',
//      plant_image: 'https://bloomscape.com/wp-content/uploads/2020/08/bloomscape_fiddle-leaf-fig_charcoal-alt.jpg?ver=279576'
//  },   
//  {
//      plant_id: 6,
//      plant_name: 'Fiddle Leaf Fig 6',
//      species_name: 'Ficus lyrata',
//      water_schedule: 'Once per week',
//      light_level: 'low indirect light',
//      plant_image: 'https://bloomscape.com/wp-content/uploads/2020/08/bloomscape_fiddle-leaf-fig_charcoal-alt.jpg?ver=279576'
//  },   
//  {
//      plant_id: 7,
//      plant_name: 'Fiddle Leaf Fig 7',
//      species_name: 'Ficus lyrata',
//      water_schedule: 'Once per week',
//      light_level: 'low indirect light',
//      plant_image: 'https://bloomscape.com/wp-content/uploads/2020/08/bloomscape_fiddle-leaf-fig_charcoal-alt.jpg?ver=279576'
//  },   
// ]

const MyPlants = () => {
    const [myPlantData, setMyPlantData]=useState([]);
    const [edit, setEdit]= useState(false);
    const [plantId, setPlantId] = useState(null);
    const {userInfo} = useContext(UserContext);
    // console.log('myPlantData', myPlantData)

    const editSet = (plant_id) => {
    //    console.log('plant_id from editSet', plant_id)
        setEdit(!edit);
        setPlantId(plant_id);

    }

    const fetchPlants = () => {
        if (!userInfo.user.user_id){
            const iD = localStorage.getItem('userId')
            axiosCall(iD)
        } else {
            axiosCall(userInfo.user.user_id);
        }
    }

    const axiosCall = (id) => {
        axiosWithAuth()
        .get(`/my-plants/${id}`)
        .then(res => {
            // console.log('MyPlants res:', res)
            setMyPlantData(res.data)
        })
        .catch(err => {
            console.log({'MyPlants err:': err})
        })
    }

    useEffect(() => {
        fetchPlants();
    }, [])

    return (
        <MyPlantsContainer>
            <MyPlantDataContext.Provider value={{plantInfo: {myPlantData, setMyPlantData, fetchPlants}}}>
                <NavMenuContainer className="navBar">
                    <NavMenu/>
                </NavMenuContainer>
                <LeftBar />
                <MyPlantsBody>
                    <MyPlantsHeader />
                    <Plants>
                        {
                            myPlantData.length !== 0 ?
                            myPlantData.map((plant) => {
                                return <PlantCard key={plant.my_plant_id} plant={plant} editSet={editSet}>
                                </PlantCard>
                            })
                            : <p>Add some cool flora!</p>
                        }
                        { edit && <EditPlant setEdit={setEdit} plantId={plantId}/>}

                        {/* {
                            fakePlantData.map((plant) => {
                                return <PlantCard key={plant.plant_id} plant={plant} />
                            })
                        } */}
                    </Plants>
                </MyPlantsBody>
            </MyPlantDataContext.Provider>
        </MyPlantsContainer>
    )
}

export default MyPlants;