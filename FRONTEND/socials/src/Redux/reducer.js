import { ADD_DESCRIPTION} from "./actionType"
import { GET_LOGGEDINUSERPOSTS } from "./actionType"


const initialState = {
    description: [],
    loggedinuserposts: [],

    
}

export default function reducer(state = initialState, { type, payload }) {
    console.log("type", type)
    switch (type) {
        case ADD_DESCRIPTION:
            return {
                ...state,
                description: payload,
            }

        
        case GET_LOGGEDINUSERPOSTS:
            return {
                ...state,
                loggedinuserposts: payload,
            }
    
        default:
            return state;

    }
}