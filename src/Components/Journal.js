import React, { useState } from 'react';
import Navigation from "./Navigation";
import { connect } from "react-redux";
import { postWorkout } from "../actions/actions";

const Journal = () => {
    const [exercise, setExercise] = useState({
        
        date: Date.now(),
        name: "",
        targetedArea: "",
        reps: "",
        sets: "",
        weight: "",
        id: Date.now()
        
    })

    const handleChanges = event => {
        // @ts-ignore
        setExercise({
            ...exercise,
            [event.target.name]: event.target.value,
        })
    }

    

    const handleSubmit = e => {
        e.preventDefault();
        setExercise({...exercise, [e.target.name]: ''})
    }
    
    
    

    return (
        <div>
         <Navigation />
           
            <h1>{exercise.name}</h1>
            <h1>Log Completed Exercise</h1>
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
            
        </div>
    );

}

// const mapStateToProps = state => {
//     return {

//     }
// }

export default Journal
            
// ;connect(mapStateToProps, { postWorkout })