import axios from 'axios';
const URL = 'http://localhost:4000';


export const addTask = async (list:any) => {
    try {
        return await  axios.post(`${URL}/add`, list);
        // return list;
        // console.log(list)
    } catch (error) {
        console.log("error while calling addList Api...", error);
    }
}

export const fetchList = async ()=>{
    try {
        return await axios.get(`${URL}/`);
        // console.log("calling api");
    } catch (error) {
        console.log("error while calling fetchList Api...",error)
    }
}
export const finishTask =async(id:any)=>{
    try {
        // console.log(id);
        return await axios.delete(`${URL}/delete/${id}`);
    } catch (error) {
        // console.log("Error While calling finishTask Api...\n",error);
       return({status:400});
    }
}

