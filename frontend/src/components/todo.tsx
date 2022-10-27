import React from 'react';
import './css/todo.css';
import { useState } from "react";
import { useEffect } from 'react';

import { addTask } from '../services/api';
import { fetchList } from '../services/api';
import { finishTask } from '../services/api';

const Todo = () => {

    const [list, setList] = useState([]);
    const [task,setTask] = useState([]);

    useEffect(() => {
        fetchListFunction();
    }, [])

    const fetchListFunction = async () => {
        let result: any = await fetchList();
        setTask(result.data);
    }



    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const jsonlist = JSON.stringify(list);
        const result = await addTask(list);
        fetchListFunction();
    }

    const completed = async (id:any)=>{
        const result = await finishTask(id);
        console.log(result.status);
        fetchListFunction();
    }

    return (
        <div className="card">
            <h5 className="heading"> to do list</h5>
            <div className="add-form">
                <form onSubmit={(e) => handleSubmit(e)} >
                    <textarea name="task" onChange={(e) => { setList({ ...list, [e.target.name]: e.target.value }) }} required/>
                    <select name="priority" onChange={(e) => { setList({ ...list, [e.target.name]: e.target.value }) }}  required>
                        
                        <option value="null" selected disabled> SET PRIORITY</option>
                        <option value="high">HIGH</option>
                       
                        <option value="low">LOW</option>
                    </select>
                    <input type="date" name="date" onChange={(e) => { setList({ ...list, [e.target.name]: e.target.value }) }} required/>

                    <button type="submit"> add task</button>
                </form>
            </div>
            <div className="list">
                <table>
                    <thead>
                    <tr>
                        <th>priority</th>
                        <th>task</th>
                        <th>date</th>
                        <th>completed</th>
                    </tr>
                    </thead>
                    
                    <tbody>
                    {
                        task.map((task,value) => (
                            <tr key={value}>
                                <td>{task.priority}</td>
                                <td>{task.task}</td>
                                <td>{task.date}</td>
                                <td><button onClick={()=>completed(task._id)}>done</button></td>
                            </tr>
                        ))
                    }
                    </tbody>
                    

                </table>
            </div>
        </div>
    )
}

export default Todo;