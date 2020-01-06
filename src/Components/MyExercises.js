import React from "react";
import Navigation from "./Navigation";
import { Card, CardTitle, CardSubtitle, CardBody, CardDeck } from "reactstrap";

const MyExercises = () => {

  const workouts = [
    { id: 1, name: "Benchpress", sets: "", reps: "", weight: "" },
    { id: 2, name: "Bicep curls", sets: "", reps: "", weight: "" },
    { id: 3, name: "Leg Press", sets: "", reps: "", weight: "" },
    { id: 4, name: "Lat Pulldowns", sets: "", reps: "", weight: "" }
  ];

  return (
    <div>
      <Navigation />
      <h1>My Exercises</h1>
      {workouts.map(exercise => {
        return (
          <CardDeck className="wrapper">
          <Card className="card-wrapper" key={workouts.id}>
          <CardBody className="card-body">
            <CardTitle>Name: {exercise.name}</CardTitle>
            <CardSubtitle>Sets: {exercise.sets}</CardSubtitle>
            <CardSubtitle>Reps: {exercise.reps}</CardSubtitle>
            <CardSubtitle>Weight: {exercise.weight}</CardSubtitle>
          </CardBody>
          </Card>
          </CardDeck>
        );
      })}
    </div>
  );
};

export default MyExercises;
