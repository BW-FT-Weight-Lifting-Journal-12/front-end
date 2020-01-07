import React, { useState } from 'react';
import Navigation from "./Navigation";
import { connect } from 'formik';

const Journal = () => {
    const [exercise, setExercise] = useState({
        date: Date.now(),
        name: "",
        targetedArea: "",
        reps: "",
        sets: "",
        weight: ""
    })

    const handleChanges = event => {
        setExercise({
            ...exercise,
            [event.target.name]: event.target.value,
        })
    }

    const handleSubmit = event => {
        event.preventDefault();
    }

    return (
        <Navigation />
        <h1>Log Completed Exercise</h1>
        <form onSubmit = {handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Name of Exercise"
                value={exercise.name}
                onChange = {handleChanges}
            />
            <input
                type="text"
                name="targetedArea"
                placeholder="Targeted Area"
                value={exercise.targetdArea}
                onChange = {handleChanges}
            />
            <input
                type="text"
                name="reps"
                placeholder="Number of Reps"
                value={exercise.reps}
                onChange = {handleChanges}
            />
            <input
                type="number"
                name="sets"
                placeholder="Sets"
                value={exercise.sets}
                onChange = {handleChanges}
            />
            <input
                type="number"
                name="weight"
                placeholder="Weight"
                value={exercise.weight}
                onChange = {handleChanges}
            />
            <button>Add Exercise</button>
        </form>
    );

}

const mapStateToProps = state => {
    return {

    }
}

export default connect(mapStateToProps, {})(Journal);