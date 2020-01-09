import axios from "axios";

export const POST_WORKOUT_START = "POST_WORKOUT_START";
export const POST_WORKOUT_SUCCESS = "POST_WORKOUT_SUCCESS";
export const POST_WORKOUT_ERROR = "POST_WORKOUT_ERROR";

export const postWorkout = workoutValues => dispatch => {
    dispatch({ type: POST_WORKOUT_START });
    axios.post("https://weight-lifting-journal12.herokuapp.com/api/journal", workoutValues)
        .then(response => {
            dispatch({ type: POST_WORKOUT_SUCCESS, payload: response.data })
            console.log("IT WORKED", response);
        })
        .catch(error => {
            console.log("Something went wrong!", error)
            dispatch({ type: POST_WORKOUT_ERROR, payload: error.response })
        })
};

export const FETCH_WORKOUT_START = "FETCH_WORKOUT_START";
export const FETCH_WORKOUT_SUCCESS = "FETCH_WORKOUT_SUCCESS";
export const FETCH_WORKOUT_FAILURE = "FETCH_WORKOUT_FAILURE";

// export const fetchWorkout = () => {

// }

export const DELETE_WORKOUT_START = "DELETE_WORKOUT_START";
export const DELETE_WORKOUT_SUCCESS = "DELETE_WORKOUT_SUCCESS";
export const DELETE_WORKOUT_ERROR = "DELETE_WORKOUT_ERROR";

export const deleteWorkout = (id, props ) => dispatch => {
    dispatch({ type: DELETE_WORKOUT_START });
    axios.delete(`https://weight-lifting-journal12.herokuapp.com/api/journal/${id}`)
        .then(response => {
            console.log(response);
            dispatch({ type: DELETE_WORKOUT_SUCCESS, payload: id })
            props.history.push("/protected")
        })
        .catch(error => {
            console.log(error);
            dispatch({ type: DELETE_WORKOUT_ERROR, payload: error })
        })
}

export const EDIT_WORKOUT_START = "EDIT_WORKOUT_START";
export const EDIT_WORKOUT_SUCCESS = "EDIT_WORKOUT_SUCCESS";
export const EDIT_WORKOUT_ERROR = "EDIT_WORKOUT_ERROR";

export const editWorkout = (id, workoutValues) => dispatch => {
    dispatch({ type: EDIT_WORKOUT_START });
    axios.put(`https://weight-lifting-journal12.herokuapp.com/api/journal/${id}`, workoutValues)
        .then(response => {
            console.log(response)
            dispatch({ type: EDIT_WORKOUT_SUCCESS, payload: response.data })
        })
        .catch(error => {
            console.log(error);
            dispatch({ type: EDIT_WORKOUT_ERROR, payload: error })
        })
};