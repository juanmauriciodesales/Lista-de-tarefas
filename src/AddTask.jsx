import React, { useState } from 'react';
import "./AddTask.css"
import Button from './Button.jsx';

const AddTask = ({handleTaskAddition}) => {
    const [inputData, setInputData] = useState('')

    const handleInputChange = (e) => {
        setInputData(e.target.value)
    }

    const handleAddTaskClick = () => {
        handleTaskAddition(inputData)
        setInputData('')
    }

    return ( 
        <div className="add-task-conteiner">
            <input onChange={handleInputChange} value={inputData} className="add-task-imput" type="text" />
            <div className="add-task-button-conteiner">
            <Button onClick={handleAddTaskClick}>Adicionar</Button>
            </div>
        </div>
    
    )

     
}
 
export default AddTask;