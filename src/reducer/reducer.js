import { POST_WORKOUT_START, POST_WORKOUT_SUCCESS, POST_WORKOUT_ERROR,FETCH_WORKOUT_START,FETCH_WORKOUT_SUCCESS, FETCH_WORKOUT_FAILURE, DELETE_WORKOUT_START, DELETE_WORKOUT_SUCCESS, DELETE_WORKOUT_ERROR, EDIT_WORKOUT_START, EDIT_WORKOUT_SUCCESS, EDIT_WORKOUT_ERROR} from "../actions/actions";

const newWorkoutState = () => ({
    exerciseList: [],
    isFetching: false,
    isPosting: false,
    isDeleting: false,
    isEditing: false,
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

        case DELETE_WORKOUT_START:
            return {
                ...state,
                isDeleting: true
            }

        case DELETE_WORKOUT_SUCCESS:
            return {
                ...state,
                isDeleting: false,
            }

        case DELETE_WORKOUT_ERROR:
            return {
                ...state,
                isDeleting: false,
                error: action.payload,
            }

        case EDIT_WORKOUT_START:
            return {
                ...state,
                isEditing: true,
            }

        case EDIT_WORKOUT_SUCCESS:
            return {
                ...state,
                // exerciseList: ,
                isEditing: false,
            }

        case EDIT_WORKOUT_ERROR:
            return {
                ...state,
                isEditing: false,
                error: action.payload,
            }
        default:
            return state;
    }
}