import { POST_WORKOUT_START, POST_WORKOUT_SUCCESS, POST_WORKOUT_ERROR,FETCH_WORKOUT_START,FETCH_WORKOUT_SUCCESS, FETCH_WORKOUT_FAILURE} from "../actions/actions";

const newWorkoutState = () => ({
    exerciseList: [],
    isFetching: false,
    isPosting: false,
    error: "",
});

export const reducer = (state = newWorkoutState, action) => {
    switch(action.type) {
        case POST_WORKOUT_START:
            return {
                ...state,
                isPosting: true,
            }

        case POST_WORKOUT_SUCCESS:
            return {
                ...state,
                exerciseList: action.payload,
                isPosting: false,
            }

        case POST_WORKOUT_ERROR:
            return {
                ...state,
                isPosting: false,
                error: action.payload,
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