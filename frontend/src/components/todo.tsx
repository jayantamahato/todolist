import React from 'react';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';


import './css/todo.css';
import swal from 'sweetalert';

import { useState } from "react";
import { useEffect } from 'react';

import { addTask } from '../services/api';
import { fetchList } from '../services/api';
import { finishTask } from '../services/api';


const Todo = () => {

    const [list, setList] = useState([]);
    const [task, setTask] = useState([]);

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
        if(result){
            swal("Great!", "Your Task Added!", "success");
        }else{
            swal("Error", "We Detect Some Error!", "Error");
        }
        fetchListFunction();
    }

    const completed = async (id: any) => {
        const result = await finishTask(id);
        if(result){
            swal("Great!", "You Completed One Task!", "success");
        }else{
            swal("Error", "We Detect Some Error!", "Error");
        }
        fetchListFunction();
    }

    return (
        <div className="card">
            <h5 className="heading"> to do list</h5>
            <div className="add-form">
                <form onSubmit={(e) => handleSubmit(e)} >
                    <TextField id="outlined-basic" label="Task" variant="outlined" name="task" onChange={(e) => { setList({ ...list, [e.target.name]: e.target.value }) }} required />
                    <div>
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel id="demo-simple-select-standard-label">Priority</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                label="Priority"
                                name="priority"
                                onChange={(e) => { setList({ ...list, [e.target.name]: e.target.value }) }}
                                required
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value="high">High</MenuItem>
                                <MenuItem value="low">Low</MenuItem>
                            </Select>
                        </FormControl>
                    </div>


                    {/* <input type="date" name="date" onChange={(e) => { setList({ ...list, [e.target.name]: e.target.value }) }} required /> */}
                    <TextField id="outlined-basic" label="" variant="outlined" type="date" name="date" onChange={(e) => { setList({ ...list, [e.target.name]: e.target.value }) }} required />

                    <button type="submit"> Add Task</button>
                </form>
            </div>
            <div className="list">
                <table>
                    <thead>
                        <tr>
                            <th>priority</th>
                            <th>task</th>
                            <th>date</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            task.map((task, value) => (
                                <tr key={value}>
                                    <td>{task.priority}</td>
                                    <td>{task.task}</td>
                                    <td>{task.date}</td>
                                    <td><button onClick={() => completed(task._id)}>Completed</button></td>
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