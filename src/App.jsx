import React from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom'
import Home from './components/home/Home';
import { MovieDetail } from './components/home/moviedetail/MovieDetail';


function App() {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/movie/:id' component={MovieDetail}/>
      </Switch>
      
    </main>
  );
}

export default App;
