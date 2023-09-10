import axios from "axios";

export async function getkanban() {

    let data = await axios.get(`https://kanaban-system.onrender.com/kanban/get/${localStorage.getItem("owner")}`)
        if(data){
           // console.log(data)
            return data.data
        }
 else{ 
    return null
 }
}