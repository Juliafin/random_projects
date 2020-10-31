import React from 'react';
import { connect } from 'react-redux';
import { changeTodo, addTodo } from '../actionCreators';



const TodoInput  = (props) => {

    const { dispatch } = props;

    const onTodoChange = (event) => {
        const todo = event.target.value;
        dispatch(changeTodo(todo))
    }

    const onTodoClick = () => {
        dispatch(addTodo())
    }
    console.log(props, 'props')

    return (
        <div>
            <h1>Enter a Todo</h1>
            <input style={{...props.inputStyles}} value={props.currentTodo} onChange={onTodoChange} type="text"/>
            <button onClick={onTodoClick} type="submit">Add todo!</button>
        <p>Current Todo: {props.currentTodo}</p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        currentTodo: state.currentTodo,
        inputStyles: state.inputStyles
    }
}


export default connect(mapStateToProps)(TodoInput)



