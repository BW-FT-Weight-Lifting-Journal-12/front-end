import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login  from './Components/Login';
import Welcome from './Components/Welcome';
import Exercises from './Components/Exercises';
import MyExercises from './Components/MyExercises';
import Footer from './Components/Footer';
import Journal from "./Components/Journal";

import './App.css';

function App() {
  return (
    <div className="App">
    <Journal path = "/journal"/>
    <Router>
    <Route path="/" exact>
     <Login />
     </Route>
     <Route path="/welcome">
    <Welcome />
    </Route>
    <Route path="/exercises">
    <Exercises />
    </Route>
    <Route path="/myexercises">
    <MyExercises />
    </Route>
    <Footer />
    </Router>
    </div>
  );
}

export default App;
