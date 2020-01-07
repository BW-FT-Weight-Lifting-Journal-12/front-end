const newWorkoutState = () => ({
    isFetching: false,
    exerciseList: [],
});

export const exerciseReducer = (state = newWorkoutState, action) => {
    switch(action.type) {
        case POST_WORKOUT_START:
            return {
                ...state,
                isFetching: true,
            }

        case POST_WORKOUT_SUCCESS:
            return {
                ...state,
                isFetching: false,
            }

        case POST_WORKOUT_ERROR:
            return {
                ...state,
                isFetching: false,
            }

        case FETCH_WORKOUT_START:
            return {
                ...state,
                isFetching: true,
            }

        case FETCH_WORKOUT_SUCCESS:
            return {
                ...state,
                exerciseList: action.payload,
            }

        case FETCH_WORKOUT_FAILURE:
            return {
                ...state,
            }
        default:
            return state;
    }
}