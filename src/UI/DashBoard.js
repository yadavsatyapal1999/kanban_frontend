
import { myContext } from "../Context/Context";
import { useContext } from "react"
import Input from "./Input";
import AddKanban from "./Addkanban";
import "../UI/Ui.css"

export default function DashBoard() {

    const { kanban, getask, Setgettask } = useContext(myContext);



    return <div className="dashboard" >
        {kanban != null || kanban != undefined ?
            <div classname="parent">
                {kanban.map(data => {
                    return <div className="kanban" >
                        <div className="name" >
                            {data.Kanban}
                        </div>
                        <Input data={data} />
                        {getask != null || getask != undefined
                            ? <ol className="task">
                                {getask.map(task => {
                                    if (task.Kanban == data.Kanban) {
                                        return <li>
                                            {task.task}
                                        </li>
                                    }
                                })}
                            </ol>
                            : <></>}
                    </div>
                })}
            </div>
            :
            <div></div>}
        <AddKanban />
    </div>
}