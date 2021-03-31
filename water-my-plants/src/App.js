
import './App.css';
import React, {useEffect, useState} from 'react'
import {Route} from 'react-router-dom'
import UserContext from './contexts/userContext'

import MyPlants from './components/MyPlants'
import Login from './components/Login'
import Register from './components/Register';
import NavMenu from './components/NavMenu';
import EditPlant from './components/EditPlant';
import UpdateAccount from './components/UpdateAccount';
import axios from 'axios';

function App() {
  const [user, setUser] = useState({});

  return (
    <div className="App">
      <UserContext.Provider value={{userInfo: {user, setUser}}} >
        <Route path='/myPlants'>
            <MyPlants />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/register'>
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
      </UserContext.Provider >
    </div>
  );
}

export default App;
