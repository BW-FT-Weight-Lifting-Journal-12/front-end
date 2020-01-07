import React from "react";
import Navigation from "./Navigation";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { StyledExercises } from "../styles/StyledExercises";


const Exercises = () => {
  return (
    <div>
      <Navigation />
      <h1>Add Exercises to My Workout</h1>
      <StyledExercises>
        <Form className="form-wrapper">
          <FormGroup className="form-grp">
            <Label for="exampleSelect">Exercise: </Label>
            <Input
              className="exercise-input"
              type="select"
              name="exercise"
              id="exercise"
            >
              <option>Select One</option>
              <option>Bench Press</option>
              <option>Lat Pulldowns</option>
              <option>Curls</option>
              <option>Leg Press</option>
            </Input>
          </FormGroup>
          <FormGroup className="form-grp">
            <Label for="exampleEmail">Weight: </Label>
            <Input
              className="exercise-input"
              type="text"
              name="weight"
              id="weight"
            />
          </FormGroup>
          <FormGroup className="form-grp">
            <Label for="sets">Sets: </Label>
            <Input
              className="exercise-input"
              type="text"
              name="sets"
              id="sets"
            />
          </FormGroup>
          <FormGroup className="form-grp">
            <Label for="reps">Reps: </Label>
            <Input
              className="exercise-input"
              type="text"
              name="reps"
              id="reps"
            />
          </FormGroup>

          <Button className="exercise-btn">Add Exercise</Button>
        </Form>
      </StyledExercises>
    </div>
  );
};

export default Exercises;
