import React from "react";
import Navigation from "./Navigation";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const Exercises = () => {
  return (
    <div>
      <Navigation />
      <h1>Add Exercise to My Workout</h1>

      <Form className="form-wrapper">
        <FormGroup className="form-grp">
          <Label for="exampleSelect">Exercise: </Label>
          <Input type="select" name="select" id="exercise">
            <option>Select One</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
        <FormGroup className="form-grp">
          <Label for="exampleEmail">Weight: </Label>
          <Input type="text" name="weight" id="weight" />
        </FormGroup>
        <FormGroup className="form-grp">
          <Label for="sets">Sets: </Label>
          <Input type="text" name="sets" id="sets" />
        </FormGroup>
        <FormGroup className="form-grp">
          <Label for="reps">Reps: </Label>
          <Input type="text" name="reps" id="reps" />
        </FormGroup>

        <Button className="exercise-btn">Add Exercise</Button>
      </Form>
    </div>
  );
};

export default Exercises;
