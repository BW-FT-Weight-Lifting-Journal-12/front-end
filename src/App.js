import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Private from './Components/PrivateRoute';
import Login from "./Components/Login";
import Welcome from "./Components/Welcome";
import Exercises from "./Components/Exercises";
import MyExercises from "./Components/MyExercises";
import SignUp from "./Components/SignUp";
import Footer from "./Components/Footer";
import Journal from "./Components/Journal";


import "./App.css";

function App() {
  return (
    <div className="App">
    <Router>
      <Route exact path="/" >
        {
          // <Login />  
        }
      </Route>
      <Route path="/welcome">
        <Welcome />
      </Route>
      <Route path="/exercises">
        <Exercises />
      </Route>
      <Route path="/myExercises">
        <MyExercises />
      </Route>
      <Switch>
        <Private path='/protected'/>
        <Route path='/login' component={Login}/>
        <Route exact path='/signUp' component={SignUp}/>
        <Route component={Login}/>
      </Switch>
      
      <Footer />
    </Router>
    </div>
  );
}

export default App;
