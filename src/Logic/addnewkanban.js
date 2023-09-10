
import axios from "axios";



export async function addnewkanban(kanban) {
console.log("addnew kanban function")
console.log(kanban)
    const token = localStorage.getItem("token");
    console.log(token)
    if (!token) {
        alert("token is missing");
        console.log("token not found");
    }

    const data = {
        Kanban: kanban

    }
    await axios.post('https://kanaban-system.onrender.com/kanban/new', data,
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: token
            }
        }

    )
        .then(res => {
            console.log("task added sucesfully")
            alert("added sucessfully")
            return res
        })
        .catch(err => {
            console.log(err);
            alert("Unable to save data")
            return
        })

     console.log(data)

    return

}