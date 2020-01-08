import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Private from "./Components/PrivateRoute";
import Exercises from "./Components/Exercises";
import Login from "./Components/Login";
import Welcome from "./Components/Welcome";
import Journal from "./Components/Journal";
import MyExercises from "./Components/MyExercises";
import SignUp from "./Components/SignUp";
import Footer from "./Components/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact>
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
        {
          // <Route path="/exercises">
          //   <Exercises />
          // </Route>
          // <Route path="/myExercises">
          //   <MyExercises />
          // </Route>
        }

        <Switch>
          <Private path="/protected" />
          <Private exact path="/protected" component={MyExercises} />
          <Private path="/protected/exercises" component={Exercises} />
          <Private path="/protected/list" component={Journal} />
          <Route path="/login" component={Login} />
          <Route exact path="/signUp" component={SignUp} />
          <Route component={Login} />
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
