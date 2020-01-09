import React, { useState } from "react";
import Navigation from "./Navigation";

import { axiosWithAuth} from './utils/axiosWithAuth'
import {
  StyledJournalTitle,
  StyledJournalForm,
  StyledJournalFooter
} from "../styles/StyledJournal";


const Journal = () => {


    const [exercise, setExercise] = useState({

        date: Date.now(),
        name: "",
        targetedArea: "",
        reps: "",
        sets: "",
        weight: "",
        id: Date.now(),
        journal: ''
        
    })


    const exercises = {
        exercise: exercise.name,
        weight: exercise.weight,
        sets: exercise.sets,
        date: exercise.date,
        muscle: exercise.targetedArea,
        journal: exercise.journal

    }

    

    axiosWithAuth().
    post('/api/workouts', exercises)
        .then( res =>
        {
          console.log(res)
        } )
        .catch( err =>
        {
            console.log(err)
        } );

    console.log('/')

    axiosWithAuth().get('https://weight-lifting-journal-12.herokuapp.com/').then(res => console.log(res))
        
    const handleChanges = event => {
        // @ts-ignore
        setExercise({
            ...exercise,
            [event.target.name]: event.target.value,
        })
    }

  const handleSubmit = e => {
    e.preventDefault();
    setExercise({ ...exercise, [e.target.name]: "" });
  };

  return (
    <div>
      <Navigation />
      <StyledJournalTitle>
        <h1>{exercise.name}</h1>
        <h1>Log Completed Exercise</h1>
      </StyledJournalTitle>
      <StyledJournalForm>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name of Exercise"
            value={exercise.name}
            onChange={handleChanges}
          />
          <input
            type="text"
            name="targetedArea"
            placeholder="Targeted Area"
            value={exercise.targetedArea}
            onChange={handleChanges}
          />
          <input
            type="text"
            name="reps"
            placeholder="Number of Reps"
            value={exercise.reps}
            onChange={handleChanges}
          />
          <input
            type="number"
            name="sets"
            placeholder="Sets"
            value={exercise.sets}
            onChange={handleChanges}
          />
          <input
            type="number"
            name="weight"
            placeholder="Weight"
            value={exercise.weight}
            onChange={handleChanges}
          />
          <button>Add Exercise</button>
        </form>


 {/* Added footer for styling */}
      </StyledJournalForm>
      <StyledJournalFooter>
        <footer></footer>
      </StyledJournalFooter>
    </div>
  );
};

export default Journal