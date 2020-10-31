import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from '../actionCreators';


const TodosDisplay = (props) => {

    const { dispatch } = props;

    const onTodoDelete = (event) => {
        const id = parseInt(event.target.id);
        dispatch(deleteTodo(id));
    }


    const todos = props.todos.length ? props.todos.map((todo, index) => {
        return (
            <li onClick={onTodoDelete} id={index} >{index + 1}: {todo}</li>
        )
    }) : (<p>No todos yet!</p>)

    return (
    <ul>{todos}</ul>
    )
}


const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(TodosDisplay);
