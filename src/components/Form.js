import React, { useEffect } from 'react'
import {v4 as uuidV4} from 'uuid'

function Form({ input, setInput, tasks, setTasks, editTask, setEditTask }) {

    const updateTask = (title, id, status) => {
        const newTask = tasks.map(item => item.id === id ? {title, id, status} : item);
        setTasks(newTask);
        setEditTask('');
    };

    useEffect(() => {
        if(editTask) {
            setInput(editTask.title);
        } else {
            setInput('');
        }
    }, [setInput, editTask]);

    const onInputChange = (event) => {
        setInput(event.target.value);
    } 

    const onFormSubmit = (event) => {
        event.preventDefault();

        if(!editTask) {
            setTasks([...tasks, {id: uuidV4(), title: input, completed: false}]);
            setInput('');
        } else {
            updateTask(input, editTask.id, editTask.completed);
        }

    }

  return (
    <form onSubmit={onFormSubmit}>
        <input 
            type={'text'} 
            placeholder='Enter your task here....' 
            className='text-input' 
            value={input} 
            onChange={onInputChange}
            required
        />
        <button className='button-add'>{editTask ? 'OK' : 'Add'}</button>
    </form>
  )
}

export default Form