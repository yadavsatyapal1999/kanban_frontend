import { addnewkanban } from "../Logic/addnewkanban"
import { useState } from 'react';
import { getkanban } from "../Logic/getkanban";
import { myContext } from "../Context/Context";
import { useContext } from "react"






export default function AddKanban() {

    const { Setkanban, Setgettask } = useContext(myContext)
    const [newkanban, Setnewkanban] = useState()
    const [visible, Setvisible] = useState(false);
    return <div>
        <div>
            <div>Add New Kanban</div>
            <button onClick={() => {
                Setvisible(!visible)
                Setnewkanban()
            }} >{visible ? <span>Cancel</span> : <span>Add New</span>}</button>
        </div>
        {
            visible ?
                <div>
                    <input type="text" value={newkanban}
                        onChange={(e) => {
                            Setnewkanban(e.target.value)
                        }} />
                    <br />
                    <button onClick={() => {
                        addnewkanban(newkanban).then(() => {


                            console.log("get kanban and task")
                            // console.log(getkanban());
                            getkanban().then(data => {
                                Setkanban(data)
                                Setnewkanban();
                                Setvisible(!visible)
                            })
                            //console.log(gettask());
                        })

                    }} >Add new Kanban</button>
                </div> : <></>
        }

    </div>
}