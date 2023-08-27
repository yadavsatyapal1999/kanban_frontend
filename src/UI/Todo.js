import { useState } from "react"

export default function Todo() {
    const [todo, Settodo] = useState()
    console.log(todo)
    return <div className="todo">
        {todo != undefined || todo != null
            ? <div>
                {todo.map((data) => {
                    return <div> {data} </div>
                })}
            </div> : <h4>No Todo</h4>}
        <button>Add a Card</button>
    </div>

}