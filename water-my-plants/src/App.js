
import './App.css';
import React, {useEffect, useState} from 'react'
import {Route, Switch } from 'react-router-dom'
import UserContext from './contexts/userContext'

import MyPlants from './components/MyPlants'
import Login from './components/Login'
import Register from './components/Register';
import NavMenu from './components/NavMenu';
import EditPlant from './components/EditPlant';
import UpdateAccount from './components/UpdateAccount';
import MarketingPage from './components/MarketingPage';



function App() {
  const [user, setUser] = useState({});

  return (
    <div className="App">
      <UserContext.Provider value={{userInfo: {user, setUser}}} >
          <Switch>
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
            <Route path='/editPlant'>
              <EditPlant />
              </Route>
            <Route path='/updateAccount'>
              <UpdateAccount />
            </Route> 
            <Route path="/" component={MarketingPage} />
          </Switch>
        </UserContext.Provider >

    </div>
  );
}

export default App;
