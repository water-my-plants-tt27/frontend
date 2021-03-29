
import './App.css';
import {Route} from 'react-router-dom'

import MyPlants from './components/MyPlants'
import Login from './components/Login'
import Register from './components/Register';

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
    </div>
  );
}

export default App;
