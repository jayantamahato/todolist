import { Request, Response } from "express";
import task from "../schema/taskSchema";

const addTask = async (req: Request, res: Response) => {
  const data = req.body;
  const validTask = new task(data);
  try {
    const result = await validTask.save();
    res.json({
      status: 200,
      massege: "saved"
    })
  } catch (error) {
    res.json({
      status: "000",
      massege: "error"
    })
  }
};

const fetchList = async (req: Request, res: Response) => {
  const result = await task.find({})
  res.send(result);
}

const deleteTask = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const result = await task.findByIdAndDelete(id);
    res.json({
      status:"000"
    })
  } catch (error) {
    res.json({
      stasus:"000"
    })
  }


};
export { addTask, deleteTask, fetchList };
