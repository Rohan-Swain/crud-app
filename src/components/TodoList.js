import React from 'react'

function TodoList({tasks, setTasks, setEditTask}) {

    const handleDelete = ({id}) => {
        setTasks(tasks.filter(task => task.id !== id));
    }

    const handleComplete = ({id}) => {
        setTasks(
            tasks.map((item) => {
                if(item.id === id) {
                    return {...item, completed: !item.completed}
                }
                return item;
            })
        )
    }

    const handleEdit = ({id}) => {
        const findTask = tasks.find((task) => task.id === id);
        setEditTask(findTask);
    }

  return (
    <div>
        {tasks.map(item => 
                <li className='list-item' key={item.id}>
                    <input 
                        type={'text'} 
                        value={item.title} 
                        className={`list ${item.completed ? 'complete' : ''}`}
                        onChange={(event) => event.preventDefault()}
                    />
                    <div className='button-complete task-button' onClick={() => handleComplete(item)}>
                        <i className='fa fa-check-circle' />
                    </div>
                    <div className='button-edit task-button' onClick={() => handleEdit(item)}>
                        <i className='fa fa-edit' />
                    </div>
                    <div className='button-delete task-button' onClick={() => handleDelete(item)}>
                        <i className='fa fa-trash' />
                    </div>
                </li>
            )
        }
    </div>
  )
}

export default TodoList