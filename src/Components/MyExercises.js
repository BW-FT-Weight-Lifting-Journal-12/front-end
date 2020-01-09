import React, { useState, useEffect } from "react";
import axios from "axios";
import Navigation from "./Navigation";

import { Card, CardTitle, CardSubtitle, CardBody, CardDeck, Button } from "reactstrap";
import { StyledMyExercises } from '../styles/StyledMyExercises';
import { connect } from "react-redux";
import { deleteWorkout, editWorkout } from "../actions/actions";
import { axiosWithAuth } from "./utils/axiosWithAuth";

const MyExercises = (props) => {
  const [journals, setJournals] = useState([])

  const titleStyle = {
    textAlign: "center"
  };

  // const workouts = [
  //   {
  //     id: 1,
  //     name: "Benchpress",
  //     area: "Chest",
  //     sets: "2",
  //     reps: "10",
  //     weight: "150"
  //   },
  //   {
  //     id: 2,
  //     name: "Bicep curls",
  //     area: "Arms",
  //     sets: "3",
  //     reps: "10",
  //     weight: "45"
  //   },
  //   {
  //     id: 3,
  //     name: "Leg Press",
  //     area: "Legs",
  //     sets: "2",
  //     reps: "10",
  //     weight: "250"
  //   },
  //   {
  //     id: 4,
  //     name: "Lat Pulldowns",
  //     area: "Chest",
  //     sets: "3",
  //     reps: "10",
  //     weight: "70"
  //   }
  // ];

useEffect(() => {
  axios.get("https://weight-lifting-journal-12.herokuapp.com/api/journal/")
  .then(response => {
    console.log(response)
    setJournals(response.data)
  })
  .catch(error => {
    console.log(error)
  })
},[])

  return (
    <div>
      <Navigation />
      <h1 style={titleStyle}>My Exercises</h1>
      {journals.map(exerciseList => {
        return (
          <StyledMyExercises key={exerciseList.id}>
            <CardDeck className="wrapper">
              <Card className="card-wrapper" key={journals.id}>
                <CardBody className="card-body">
                  <CardTitle>Exercise: {exerciseList.exercise}</CardTitle>
                  <CardTitle>Weight: {exerciseList.weight}</CardTitle>
                  <CardSubtitle>Sets: {exerciseList.sets}</CardSubtitle>
                  <CardSubtitle>Reps: {exerciseList.reps}</CardSubtitle>
                  <CardSubtitle>Journal Entry: {exerciseList.journal}</CardSubtitle>
                  <br />
                  <Button onClick = {() => props.history.push(`/update_exercise/${exerciseList.id}`)} className="exercise-btn">Edit</Button>
                  <br />
                  <Button onClick = {() => props.deleteWorkout(exerciseList.id)}className="exercise-btn">Delete</Button>
                </CardBody>
              </Card>
            </CardDeck>
          </StyledMyExercises>
        );
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isDeleting: state.isDeleting,
    isEditing: state.isEditing,
    exerciseList: state.exerciseList,
  }
}

export default connect(mapStateToProps, { deleteWorkout, editWorkout })(MyExercises);
