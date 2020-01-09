import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";
import { connect } from "react-redux";
import axios from "axios";
import { editWorkout } from "../actions/actions";

import {
    StyledJournalTitle,
    StyledJournalForm,
    StyledJournalFooter
} from "../styles/StyledJournal";

const UpdateExercise = (props) => {
    const [workout, setWorkout] = useState({
        exercise: "",
        weight: "",
        sets: "",
        reps: "",
        date: Date.now(),
        muscle: "",
        journal: '',
        id: Date.now(),
    });

    const testWorkout = {
        exercise: workout.exercise,
        weight: workout.weight,
        sets: workout.sets,
        reps: workout.reps,
        date: Date.now(),
        muscle: workout.muscle,
        journal: workout.journal,
        id: workout.id,
    }

    useEffect(() => {
        axios.get(`https://weight-lifting-journal12.herokuapp.com/api/journal/${props.match.params.id}`)
            .then(response => {
                console.log(response);
                setWorkout(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [props.match.params.id])

    const handleChanges = event => {
        setWorkout({
            ...workout,
            [event.target.name]: event.target.value,
        })
    };

    const handleSubmit = event => {
        event.preventDefault();
        props.editWorkout(workout.id, testWorkout)
        setTimeout(() => {
            props.history.push('/protected');
        }, 1000)
        setWorkout({
            exercise: "",
            weight: "",
            sets: "",
            reps: "",
            date: "",
            muscle: "",
            journal: '',
            id: "",
        });
    };

    return (
        <div>
            <Navigation />
            <StyledJournalTitle>
                {/* <h1>{exercise.name}</h1> */}
                <h1>Log Completed Exercise</h1>
            </StyledJournalTitle>
            <StyledJournalForm>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="exercise"
                        placeholder="Name of Exercise"
                        value={workout.exercise}
                        onChange={handleChanges}
                    />
                    <input
                        type="text"
                        name="weight"
                        placeholder="Weight"
                        value={workout.weight}
                        onChange={handleChanges}
                    />
                    <input
                        type="text"
                        name="sets"
                        placeholder="Sets"
                        value={workout.sets}
                        onChange={handleChanges}
                    />
                    <input
                        type="number"
                        name="reps"
                        placeholder="Number of Reps"
                        value={workout.reps}
                        onChange={handleChanges}
                    />
                    <input
                        type="text"
                        name="muscle"
                        placeholder="Muscle Group Targeted"
                        value={workout.muscle}
                        onChange={handleChanges}
                    />
                    <input
                        type="text"
                        name="journal"
                        placeholder="Summarize how your workout went"
                        value={workout.journal}
                        onChange={handleChanges}
                    />
                    <button type="submit">Save Changes</button>
                </form>
                {/* Added footer for styling */}
            </StyledJournalForm>
            <StyledJournalFooter>
                <footer></footer>
            </StyledJournalFooter>
        </div>
    )
}

const mapStateToProps = state => {
    return {

    }
}

export default connect(mapStateToProps, { editWorkout })(UpdateExercise)