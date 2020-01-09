import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Private from "./Components/PrivateRoute";

import Login from "./Components/Login";
import Welcome from "./Components/Welcome";

import Journal from "./Components/Journal";

import MyExercises from "./Components/MyExercises";
import SignUp from "./Components/SignUp";
import Footer from "./Components/Footer";

import "./App.css";

// http://localhost:3000/protected

function App() {
  return (
    <div className="App">

    
    <Router>
      <Route path="/welcome">
        <Welcome />
      </Route>
 {     
      // <Route path="/exercises">
      //   <Exercises />
      // </Route>

      // <Route path="/myExercises">
      //   <MyExercises />
      // </Route>
      }
      
      <Switch>
        <Private exact path='/protected' component={MyExercises}/>
        <Private path='/protected/list' component={ Journal}  />
        <Route path='/login' component={Login}/>
        <Route exact path='/signUp' component={SignUp}/>
        <Route component={Login}/>
      </Switch>



      
      <Footer />
    </Router>
        {/* <Switch>
          <Private exact path="/protected" component={MyExercises} />

          <Private path="/protected/list" component={Journal} />
          <Route path="/login" component={Login} />
          <Route exact path="/signUp" component={SignUp} />
          <Route component={Login} />
        </Switch>

        <Footer />
      </Router> */}

    </div>
  );
}

export default App;
