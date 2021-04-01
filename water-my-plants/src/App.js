
import './App.css';
import React, {useState} from 'react'
import {Route, Switch } from 'react-router-dom'
import UserContext from './contexts/userContext'

import MyPlants from './components/MyPlants'
import Login from './components/Login'
import Register from './components/Register';
import NavMenu from './components/NavMenu';
import EditPlant from './components/EditPlant';
import UpdateAccount from './components/UpdateAccount';
import MarketingPage from './components/MarketingPage';
import PrivateRoute from './components/PrivateRoute'



function App() {
  const [user, setUser] = useState({});

  return (
    <div className="App">
      <UserContext.Provider value={{userInfo: {user, setUser}}} >
          <Switch>
            
            <Route exact path='/register' component={Register}/>
            <Route exact path='/login' component={Login}/>
           
            <PrivateRoute path='/myPlants'component={MyPlants}/>  
            <PrivateRoute path='/editPlant' component={EditPlant}/>
          
            <PrivateRoute path='/updateAccount' component={UpdateAccount}/> 
            <Route path="/" component={MarketingPage} />

          </Switch>
        </UserContext.Provider >

    </div>
  );
}

export default App;
