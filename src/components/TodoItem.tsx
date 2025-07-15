import React from 'react';
import { Todo, ChangeTodoActionType } from '../types';

interface TodoItemProps extends Todo {
    style?: React.CSSProperties;
    changeTodo: (data: { id: Todo['id'], actionType: ChangeTodoActionType }) => void;
}

const TodoItem = (props: TodoItemProps) => {
    const {
        id,
        title,
        style = {},
        completed,
        changeTodo,
    } = props;

    const handleOnChange = () => {
        changeTodo({ id, actionType: 'checkboxUpd'})
    }

    const handleOnDelete = () => {
        changeTodo({ id, actionType: 'delete'})
    }

    return (
        <li style={{ padding: '10px', ...style }}>
            <input type="checkbox" checked={completed} onChange={handleOnChange}/>
            <span>{title}</span>
            <span onClick={handleOnDelete}>&times;</span>
        </li>
    )
}

export default TodoItem;