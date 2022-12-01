import React, { useState } from 'react'
import Quote from "./Quote.jsx"
import {ImBin} from 'react-icons/im'

function Main() {
    const [TaskArr,setTaskArr]=useState([])
    const handleSubmit=(event)=>{
        event.preventDefault()
        setTaskArr((prevArr)=>{
            return [...prevArr,{
                [event.target.task.name]:event.target.task.value,
                [event.target.duedate.name]:event.target.duedate.value
            }]
        })
    }
    const deleteTask=(e)=>{
        setTaskArr((prevArr)=>{
            return prevArr.filter((element,index)=>{
                return index !== e.index;
            })
        })
    } 
    
  return (
    <div class="flex min-w-full">
    <div class="max-w-[50%] h-full">
        <Quote/>
        <form class="min-h-[50%] flex-col flex justify-evenly items-center " onSubmit={handleSubmit}>
            <div class="">
                <input 
                required={true}
                type="text" 
                placeholder="Add a task" 
                name="task"/>
            </div>
            <div>
                <input 
                required={true}
                type="date"  
                name="duedate"/>
            </div>
            <div>
                <button>Add</button>
            </div>
      </form>
    </div>
    <div>
    <ol>
        {TaskArr.map((obj,index) => {
            return <li key={index} id={index}>{obj.task} {obj.duedate} <ImBin onClick={()=>{
                deleteTask({index})
            }}/></li>
            
        })
}
    </ol>
    </div>
</div>
    
  )
}

export default Main
