import React, {useState} from 'react'
import { FaTrash } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";


export default function TodoList() {
    const [tasks, setTasks] = useState(['Eat Breakfast', 'Take a Shower', 'walk the Dog'])
    //create a state variable for a task
    const [newTask, setNewTask] = useState('')

    // function tohandle input chANGE:
    function handleInputChange(event){
        setNewTask(event.target.value) //help us to fill in a new value.
    } 

    function addTask(){

        if(newTask.trim() !== ""){
            setTasks(t=>[...t, newTask]);
            setNewTask("")
        }
        
    }
    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i)=> i !== index);//use "i" not to have naming conflit         
        setTasks(updatedTasks);
    }
    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            //use array destructuring to swap two array
            [updatedTasks[index], updatedTasks[index - 1]]=[updatedTasks[index - 1], updatedTasks[index]]; //i.e to swap two element in an array
            setTasks(updatedTasks)
        }   
    }
    function moveTaskDown(index){
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            //use array destructuring to swap two array
            [updatedTasks[index], updatedTasks[index + 1]]=[updatedTasks[index + 1], updatedTasks[index]]; //i.e to swap two element in an array
            setTasks(updatedTasks)
        }   
    }

  return (
    <div className='to-do-list'>
        <h1>Conquer Your Day</h1>
        <div>
            <input type="text" placeholder='Enter a task...' value={newTask} onChange={handleInputChange} />

            <button className='add-button' onClick={addTask}>
                Add
            </button>
        </div>

        <ol>
            {/* take all the task and use the map method*/}
            {tasks.map((task, index)=>
                <li key={index}>
                    <span className='text'>{task}</span>
                    <button className='delete-button' onClick={()=> deleteTask(index)}> <FaTrash size={20} color="re" className='trash' /></button>
              {/* //add a key to each element */}


              {/* UP */}
                    <button className='move-button' onClick={()=> moveTaskUp(index)}> <FaArrowUp size={30} color="black" /></button>


                    {/* DOWN */}

                    <button className='move-button' onClick={()=> moveTaskDown(index)}><FaArrowDown size={30} color='black' /></button>

                </li>//add a key to each element

            )}
        </ol>
    </div>
  )
}
