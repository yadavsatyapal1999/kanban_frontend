import { createContext } from "react";
import { useState } from "react";


export const myContext = createContext("");



export default function ContextProvider({ children }) {

    const [login, Setlogin] = useState({ // for login
        email: "",
        password: ""
    })

    const [signup, Setsignup] = useState({  // for signup
        email: "",
        password: ""
    })

    const [kanban, Setkanban] = useState(); // to render list of kanban

    const [task, Settask] = useState(); // to add new task

    const [getask, Setgettask] = useState() // to render list of task

    //console.log(getask)
    return <myContext.Provider

        value={{
            login,
            Setlogin,
            signup,
            Setsignup,
            kanban,
            Setkanban,
            task,
            Settask,
            getask,
            Setgettask

        }}

    >
        {children}
    </myContext.Provider>

}