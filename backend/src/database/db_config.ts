import mongoose from 'mongoose';
const URL ="mongodb+srv://jayanta:TodoJayanta@TODO.ljmojmi.mongodb.net/?retryWrites=true&w=majority";
const connection = async()=>{
    try {
      const result= await  mongoose.connect(URL);
      console.log("database connected sucessfull....")
    } catch (error) {
        console.log("error while connect database...",error)
    }
    
};
export default connection;