
import { myContext } from "../Context/Context";
import { useContext } from "react"
import Input from "./Input";

export default function DashBoard() {

    const { kanban, getask, Setgettask } = useContext(myContext);

    //console.log(kanban)

    return <div>
        <h1>Kanban Page</h1>
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
            <div>Kanban</div>}
    </div>
}