import React, { useState } from "react"
import {v4 as uuidv4} from "uuid"

import Header from "./componetes/header";
import AddTask from "./AddTask";
import "./App.css";
import Tasks from "./componetes/Tasks";

function App() {
  const [tasks, setTask] = useState([
    {
      id: '1',
      title:'Estudar programação',
      completed:false,
    },
    {
      id:'2',
      title: 'Ler livros',
      completed: true,
    }
    
  ])

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if ( task.id === taskId) return {...task,completed: !task.completed}

      return task;
    })

    setTask(newTasks)
  }

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [...tasks,{
    title: taskTitle,
    id: uuidv4(),
    completed: false,

    }]
    setTask(newTasks)
  }

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter(task => task.id !== taskId)
  
    setTask(newTasks)
  }


  return (
    <div>
      
      <div className='conteiner'>
      <Header/>
        <AddTask handleTaskAddition ={handleTaskAddition} />
        <Tasks tasks={tasks} handleTaskClick = {handleTaskClick} handleTaskDeletion={handleTaskDeletion} />
      </div>
    </div>
  );
    
}

export default App;
