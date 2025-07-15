import React, { useRef } from 'react';

interface NewTodoFormProps {
    handleClick: (text: string) => void;
}

const NewTodoForm = ({ handleClick }: NewTodoFormProps) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleOnClick = () => {
        if (inputRef.current) {
            handleClick(inputRef.current.value);
            inputRef.current.value = '';
        }
    }

    return (
        <>
            <input
                ref={inputRef}
                type='text'
                placeholder={'new todo'}
            />
            <button onClick={handleOnClick}>Add todo</button>
        </>
    )
}

export default NewTodoForm;