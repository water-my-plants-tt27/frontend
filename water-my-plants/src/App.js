
import './App.css';
import React, {useEffect, useState} from 'react'
import {Route} from 'react-router-dom'
import PlantContext from './contexts/plantContext'

import MyPlants from './components/MyPlants'
import Login from './components/Login'
import Register from './components/Register';
import NavMenu from './components/NavMenu';
import EditPlant from './components/EditPlant';
import UpdateAccount from './components/UpdateAccount';
import MarketingPage from './components/MarketingPage';
import axios from 'axios';

function App() {
  const [user, setUser] = useState({});
  const [plants, setPlants] = useState();
  const [myPlants, setMyPlants] = useState([]);

  useEffect(() => {
    axios.get('https://watermyplantsapi.herokuapp.com/api/plants')
      .then(res => {
        setPlants(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div className="App">
          <PlantContext.Provider value={plants} >
        <Route path='/myPlants'>
            <MyPlants />
        </Route>
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route exact path='/register'>
          <Register />
        </Route>
        <Route path='/navMenu'>
          <NavMenu />
        </Route>
        {/* <Route path='/editPlant'>
          <EditPlant />
          </Route>
          <Route path='/updateAccount'>
          <UpdateAccount />
        </Route> */}
        <Route path="/" component={MarketingPage} />
        </PlantContext.Provider >
    </div>
  );
}

export default App;
