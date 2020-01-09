import React, { useState, useEffect } from "react";
import axios from "axios";
import Navigation from "./Navigation";

import { Card, CardTitle, CardSubtitle, CardBody, CardDeck, Button } from "reactstrap";
import { StyledMyExercises } from '../styles/StyledMyExercises';
import { connect } from "react-redux";
import { deleteWorkout, editWorkout } from "../actions/actions";

const MyExercises = (props) => {
  const [journals, setJournals] = useState([])

  const titleStyle = {
    textAlign: "center"
  };

useEffect(() => {
  axios.get("https://weight-lifting-journal12.herokuapp.com/api/journal/")
  .then(response => {
    setJournals(response.data)
  })
  .catch(error => {
    console.log(error)
  })
},[])

const handleDelete = (id) => {
  // id.preventDefault();
  axios.delete(`https://weight-lifting-journal12.herokuapp.com/api/journal/${id}`)
  .then(response => {
    props.history.go("/protected")
  })
  .catch(response => {
    console.log(response)
  })
}

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
                <CardTitle>Date: {exerciseList.date}</CardTitle>
                  <CardTitle>Exercise: {exerciseList.exercise}</CardTitle>
                  <CardTitle>Weight: {exerciseList.weight}</CardTitle>
                  <CardSubtitle>Sets: {exerciseList.sets}</CardSubtitle>
                  <CardSubtitle>Reps: {exerciseList.reps}</CardSubtitle>
                  <CardSubtitle>Journal Entry: {exerciseList.journal}</CardSubtitle>
                  <br />
                  <Button onClick = {() => props.history.push(`/update_exercise/${exerciseList.id}`)} className="exercise-btn">Edit</Button>
                  <br />
                  <Button onClick = {() => handleDelete(exerciseList.id)}className="exercise-btn">Delete</Button>
                  {/* <Button onClick = {() => props.deleteWorkout(exerciseList.id)}className="exercise-btn">Delete</Button> */}
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
