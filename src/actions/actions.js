
export const POST_WORKOUT_START = "POST_WORKOUT_START";
export const POST_WORKOUT_SUCCESS = "POST_WORKOUT_SUCCESS";
export const POST_WORKOUT_ERROR = "POST_WORKOUT_ERROR";

export const postWorkout = workoutValues => dispatch => {
    // const newWorkout = {
    //     name: workoutValues.name,
    //     reps: workoutValues.reps,
    //     sets: workoutValues.sets,
    //     weight: workoutValues.weight,
    // }
    dispatch({ type: POST_WORKOUT_START });

}

export const FETCH_WORKOUT_START = "FETCH_WORKOUT_START";
export const FETCH_WORKOUT_SUCCESS = "FETCH_WORKOUT_SUCCESS";
export const FETCH_WORKOUT_FAILURE = "FETCH_WORKOUT_FAILURE";

// export const fetchWorkout = () => {

// }