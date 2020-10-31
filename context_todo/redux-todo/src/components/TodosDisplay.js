import React from 'react';
import { AppContextConsumer } from '../AppContext';

export const TodosDisplay = (props) => {

    let { todos } = React.useContext(AppContextConsumer)

    const onTodoDelete = (event) => {
        const id = parseInt(event.target.id);
    }

    

    return (
    <ul>{todos.length ? props.todos.map((todo, index) => {
        return (
            <li onClick={onTodoDelete} id={index} >{index + 1}: {todo}</li>
        )
    }) : (<p>No todos yet!</p>)}</ul>
    )
}

