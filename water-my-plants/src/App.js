
import './App.css';
import {Route} from 'react-router-dom'

import MyPlants from './components/MyPlants'
import Login from './components/Login'

function App() {
  return (
    <div className="App">
      <Route path='/myPlants'>
        <MyPlants />
      </Route>
      <Route path='/login'>
        <Login />
      </Route>
    </div>
  );
}

export default App;
