
import { myContext } from "../Context/Context";
import { useContext } from "react"
import Input from "./Input";
import AddKanban from "./Addkanban";


export default function DashBoard() {

    const { kanban, getask, Setgettask } = useContext(myContext);



    return <div>
        {kanban != null || kanban != undefined ?
            <div>
                {kanban.map(data => {
                    return <div>
                        <div>
                            {data.Kanban}
                        </div>
                        <Input data={data} />
                        {getask != null || getask != undefined
                            ? <ol>
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