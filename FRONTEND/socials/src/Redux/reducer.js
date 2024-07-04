import { ADD_DESCRIPTION} from "./actionType"


const initialState = {
    description: [],
    
}

export default function reducer(state = initialState, { type, payload }) {
    console.log("type", type)
    switch (type) {
        case ADD_DESCRIPTION:
            return {
                ...state,
                description: payload,
            }

        
        default:
            return state;

    }
}