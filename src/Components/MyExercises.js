import React, { useState } from "react";
import Navigation from "./Navigation";
import { Card, CardTitle, CardSubtitle, CardBody, CardDeck, Button } from "reactstrap";
import { StyledMyExercises } from '../styles/StyledMyExercises';
import { connect } from "react-redux";
import { deleteWorkout, editWorkout } from "../actions/actions";

const MyExercises = () => {
  // const [workouts, setWorkouts] = useState(exerciseList);

  const titleStyle = {
    textAlign: 'center'
  };
  const workouts = [
    { id: 1, name: "Benchpress", sets: "2", reps: "10", weight: "150" },
    { id: 2, name: "Bicep curls", sets: "3", reps: "10", weight: "45" },
    { id: 3, name: "Leg Press", sets: "2", reps: "10", weight: "250" },
    { id: 4, name: "Lat Pulldowns", sets: "3", reps: "10", weight: "70" }
  ];

  return (
    <div>
      <Navigation />
      <h1 style={titleStyle}>My Exercises</h1>
      {workouts.map(exercise => {
        return (
          <StyledMyExercises key={exercise.id}>
            <CardDeck className="wrapper">
              <Card className="card-wrapper" key={workouts.id}>
                <CardBody className="card-body">
                  <CardTitle>Name: {exercise.name}</CardTitle>
                  <CardSubtitle>Sets: {exercise.sets}</CardSubtitle>
                  <CardSubtitle>Reps: {exercise.reps}</CardSubtitle>
                  <CardSubtitle>Weight: {exercise.weight}</CardSubtitle><br />
                  <Button className="exercise-btn">Edit</Button><br />
                  <Button className="exercise-btn">Delete</Button>
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
