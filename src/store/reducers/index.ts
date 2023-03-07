import { ADD_TODO } from '../action/actionType'
import { combineReducers } from 'redux'

const initialState = {
    color: 'black',
}

const todo = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                color: action.payload,
            }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    todo
})

export default rootReducer
