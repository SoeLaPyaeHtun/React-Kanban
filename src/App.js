import React, { useState } from 'react'
import Stage from './components/Stage'

const App = () => {
  let _tasks = [
    {
      id : 1,
      task : 'Task 1',
      stage : 1
    },
    {
      id : 2,
      task : 'Task 2',
      stage : 2
    },
    {
      id : 3,
      task : 'Task 3',
      stage : 3
    },
    {
      id : 4,
      task : 'Task 4',
      stage : 1
    }
  ]

  const [tasks , setTask ] = useState(_tasks);
  const [action, setAction] = useState(true);

  let stages = ["One", "Two" , "Three"]
  
  
  const moveRight = (stage) => {
    const newTasks = tasks.map(task => task.id === stage.id ? {...task, stage: stage.stage === 1 ? 2 : 3 } : task ) 
    setTask(newTasks)
   
  }

  const moveleft = (stage) => {
    const newTasks = tasks.map(task => task.id === stage.id ? {...task, stage: stage.stage === 3 ? 2 : 1 } : task ) 
    setTask(newTasks)
  }

  const addNewTask = () => {
    let task = {
      id: tasks.length + 1,
      task : 'Task ' + (tasks.length + 1),
      stage : 1
    }

    setTask([...tasks, task])
  }

  const deleteTask = (id) => {
      setTask(tasks.filter(task => task.id !== id))
  }

  const handleAction = () => {
      setAction(!action)
  }
  return (
    <div>
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className='flex items-center justify-center pt-10'>

      <button className='text-white bg-gradient-to-r
       from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br 
        focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg 
        text-sm px-5 py-2.5 text-center mr-2 mb-2' onClick={addNewTask}>Add Task</button>


      <button className={action ? 
      "focus:outline-none text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
      :
      "focus:outline-none text-white bg-green-700 hover:bg-green-800  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
    
    } onClick={handleAction}>{!action ? 'Move Item' : 'Delete Item'}</button>


      </div>
    <div className="mx-auto grid grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-3 pt-10">

    {
        stages.map((stage , index) => 
          <Stage key={index + 1}  
                 tasks={tasks.filter( tasks => tasks.stage === (index+1))} 
                 title={stage} 
                 moveRight={moveRight} 
                 moveleft={moveleft}
                 deleteTask={deleteTask}
                 action={action}
                 />
        )
    }
     
   
    </div>
    </div>
  </div>
  )
}

export default App