import express from "express";
import  {addTask}  from "../user-controler/userControler";
import {deleteTask } from "../user-controler/userControler";
import { fetchList } from "../user-controler/userControler";
const router = express.Router();

router.post('/add', addTask);

router.delete('/delete/:id', deleteTask);

router.get('/',fetchList)

export {
    router
} 
