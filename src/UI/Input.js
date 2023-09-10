import { useState } from "react"
import { myContext } from "../Context/Context";
import { useContext } from "react";
import { Addnewtask } from "../Logic/addnewtask";
import { gettask } from "../Logic/gettask";

export default function Input({ data }) {

    const [input, SetInput] = useState(false);
    const { task, Settask,Setgettask } = useContext(myContext)

    return <div>
        <button
            onClick={(() => {
                SetInput(!input);
            })}>+</button>
        <br />
        {input ? <div>
            <input value={task} onChange={(e) => {
                Settask(e.target.value);
            }} />
            <button onClick={() => {
                if (task != null || task != undefined) {
                    Addnewtask(data.Kanban, task)
                    SetInput(!input);
                    Settask()
                    gettask().then(array => {
                        console.log("array");
                        console.log(array)
                        Setgettask(array)
                    })
                }
            }} >Add task</button>
        </div> : <></>}

    </div>
}