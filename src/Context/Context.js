import { createContext } from "react";
import { useState } from "react";


export const myContext = createContext("");



export default function ContextProvider({ children }) {

    const [login, Setlogin] = useState({
        email: "",
        password: ""
    })

    const [signup, Setsignup] = useState({
        email: "",
        password: ""
    })

    const [kanban, Setkanban] = useState();

    const [task, Settask] = useState();

    const [getask, Setgettask] = useState()

    console.log(getask)
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