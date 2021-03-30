
import './App.css';
import {Route} from 'react-router-dom'

import MyPlants from './components/MyPlants'
import Login from './components/Login'
import Register from './components/Register';
import NavMenu from './components/NavMenu';
import EditPlant from './components/EditPlant';
import UpdateAccount from './components/UpdateAccount';

function App() {
  return (
    <div className="App">
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
      </Route> */}
      {/* <Route path='/updateAccount'>
        <UpdateAccount />
      </Route> */}
    </div>
  );
}

export default App;
