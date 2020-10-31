import * as actions from './actions';
import { cloneDeep } from 'lodash';

const initialState = {
    todos: [],
    currentTodo: "I like the color purple!",
    inputStyles: {
        cursor: "pointer",
        backgroundColor: 'red'
    }
}


export const todoReducer = (state = initialState, action) => {
    const newState = cloneDeep(state);
    switch (action.type) {
        case actions.CHANGE_CURRENT_TODO:
            newState.currentTodo = action.todo;
            return newState;
        case actions.ADD_TODO:
            newState.todos.push(state.currentTodo)
            newState.currentTodo = '';
            return newState;
        case actions.DELETE_TODO:
            newState.todos.splice(action.index, 1);
            return newState;
        default:
            return state;
    }
} 