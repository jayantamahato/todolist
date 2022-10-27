import  mongoose  from "mongoose";
import { isDate } from "util/types";
const taskSchema = new mongoose.Schema({
task:{
    type:String,
    require:true
},
date:{
    type:String,
    require:true
},
priority:{
    type:String,
    require:true
}
})
const task = mongoose.model("todoLists",taskSchema);
export default task;