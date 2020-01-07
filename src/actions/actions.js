
export const POST_WORKOUT_START = "POST_WORKOUT_START";
export const POST_WORKOUT_SUCCESS = "POST_WORKOUT_SUCCESS";
export const POST_WORKOUT_ERROR = "POST_WORKOUT_ERROR";

export const postWorkoutStart = (workout) => ({
    type: POST_WORKOUT_START,
    payload: workout
});

export const postWorkoutSuccess = (workout) => ({
    type: POST_WORKOUT_SUCCESS,
    payload: {
        ...workout
    }
});

export const postWorkoutError = (error) => ({
    type: POST_WORKOUT_ERROR,
    payload: error
});

// export const postWorkout = workoutValues => dispatch => {
//     const newWorkout = {
//         name: workoutValues.name,
//         reps: workoutValues.reps,
//         sets: workoutValues.sets,
//         weight: workoutValues.weight,
//     }
//     dispatch({ type: POST_WORKOUT_SUCCESS })

// }

export const FETCH_WORKOUT_START = "FETCH_WORKOUT_START";
export const FETCH_WORKOUT_SUCCESS = "FETCH_WORKOUT_SUCCESS";
export const FETCH_WORKOUT_FAILURE = "FETCH_WORKOUT_FAILURE";

export const fetchWorkoutStart = () => ({
    type: FETCH_WORKOUT_START
});

export const fetchWorkoutSuccess = data => ({
    type: FETCH_WORKOUT_SUCCESS,
    payload: data
});

export const fetchWorkoutFailure = error => ({
    type: FETCH_WORKOUT_FAILURE,
    payload: error
})

// export const fetchWorkout = () => {

// }