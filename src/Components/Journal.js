import React, { useState } from "react";
import Navigation from "./Navigation";
import { connect } from "react-redux";
import { postWorkout } from "../actions/actions";

import { connect } from "react-redux";
import { postWorkout } from "../actions/actions";
import { axiosWithAuth } from './utils/axiosWithAuth'


import { axiosWithAuth} from './utils/axiosWithAuth'
import {
    StyledJournalTitle,
    StyledJournalForm,
    StyledJournalFooter
} from "../styles/StyledJournal";




const Journal = (props) => {
    const [workout, setWorkout] = useState({
        exercise: "",

        weight: "",
        sets: "",
        reps: "",
        date: Date.now(),
        muscle: "",
        journal: '',
        id: Date.now(),
    })

    // const exercises = {
    //     exercise: exercise.name,
    //     weight: exercise.weight,
    //     sets: exercise.sets,
    //     date: exercise.date,
    //     muscle: exercise.targetedArea,
    //     journal: exercise.journal

    // }

    // axiosWithAuth().
    //     post('/api/workouts', exercises)
    //     .then(res => {
    //         console.log(res)
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     });

    // console.log('/')

    // axiosWithAuth().get('https://weight-lifting-journal-12.herokuapp.com/').then(res => console.log(res))

    const handleChanges = event => {
        // @ts-ignore
        setWorkout({
            ...workout,
            date: Date.now(),
            id: Date.now(),
            [event.target.name]: event.target.value,
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.postWorkout(workout)
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
                        type="number"
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
                    <button type="submit">Add Exercise</button>
                </form>
                {/* Added footer for styling */}
            </StyledJournalForm>
            <StyledJournalFooter>
                <footer></footer>
            </StyledJournalFooter>
        </div>
    );
};

const mapStateToProps = state => {
    return {

    }
}

export default connect(mapStateToProps, { postWorkout })(Journal);


