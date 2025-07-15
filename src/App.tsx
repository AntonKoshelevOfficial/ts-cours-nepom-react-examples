import React, { useState, useEffect } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import NewTodoForm from './components/NewTodoForm';
import { Todo, ChangeTodoActionType } from './types';

function App() {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodo = (text: string) => {
        const newTodo: Todo = {
            id: new Date().toString(),
            title: text,
            completed: false,
        }
        setTodos(prevTodos => [newTodo, ...prevTodos]);
    }

    const changeTodo = ({ id, actionType }: { id: Todo['id'], actionType: ChangeTodoActionType }) => {
        const updatedTodoList = actionType === 'delete'
            ? todos.filter(todo => todo.id !== id)
            : todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed,
                    }
                }

                return {
                    ...todo
                }
            })

        setTodos(updatedTodoList)
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then((data: Todo[]) => {
                setTodos(data);
            })
    }, []);

    return (
        <div className="App">
            <NewTodoForm
                handleClick={addTodo}
            />
            <>
                {
                    todos.length
                        ? todos.map((todo: Todo, index: number) => <TodoItem
                            { ...todo }
                            key={todo.id}
                            style={{
                                backgroundColor: index % 2 !== 1 ? '#e5e0e0' : 'white',
                                cursor: 'pointer',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                            changeTodo={changeTodo}
                        />)
                        : <></>
                }
            </>
        </div>
    );
}

export default App;
