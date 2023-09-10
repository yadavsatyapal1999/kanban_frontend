import axios from "axios";

export async function getkanban() {

    let data = await axios.get(`http://localhost:8000/kanban/get/${localStorage.getItem("owner")}`)
        if(data){
           // console.log(data)
            return data.data
        }
 else{ 
    return null
 }
}