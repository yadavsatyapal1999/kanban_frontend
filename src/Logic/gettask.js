import axios from "axios";


export  async function gettask(){
    const token = localStorage.getItem("token");
  
let data ;
    if (!token) {
        alert("token is missing");
        console.log("token not found");
    }

    
   await axios.get('https://kanaban-system.onrender.com/task/task',
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: token
            }
        }

    )
        .then(res => {
           // console.log(res.data)
           localStorage.setItem('task',res.data)
           data = res.data
            
        })
        .catch(err => {
            console.log(err);
            alert("Unable to get task")
        })

    return data

}