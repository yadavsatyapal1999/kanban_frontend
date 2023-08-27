import { useState } from "react"


export default function Doing() {

    let [doing, Setdoing] = useState();

    return <div>
        {doing != undefined || doing != null ?
            <div>
                {doing.map(data => {
                    return <div>{data}</div>
                })}
            </div> : <h4>Currently No work is going on</h4>}
        <button>Add a Card</button>
    </div>

}