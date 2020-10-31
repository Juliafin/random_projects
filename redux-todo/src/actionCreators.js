import * as actions from './actions';


export const changeTodo = (todo) => {
    return {
        todo,
        type: actions.CHANGE_CURRENT_TODO
    }
}

export const addTodo = () => {
    return {
        type: actions.ADD_TODO
    }
}

export const deleteTodo = (index) => {
    return {
        type: actions.DELETE_TODO,
        index
    }
}