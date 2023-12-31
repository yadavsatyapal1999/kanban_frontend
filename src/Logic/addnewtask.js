import axios from "axios";




export async function Addnewtask(kanban, task) {

    const token = localStorage.getItem("token");
    // console.log(token)
    if (!token) {
        alert("token is missing");
        console.log("token not found");
    }

    const data = {
        Kanban: kanban,
        task: task
    }
   await axios.post('https://kanaban-system.onrender.com/task/new', data,
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
        })
        .catch(err => {
            console.log(err);
            alert("Unable to save data")
        })
     
     console.log(data)
    return 
}

