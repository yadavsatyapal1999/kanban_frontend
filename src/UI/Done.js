import { useState } from "react"




export default function Done() {

    const [done, Setdone] = useState();
    console.log(done)
    return <div>

        {done != undefined || done != null ? <div>
            {done.map(data => {
                return <div>{data} </div>
            })}
        </div> : <h4> No work completed yet </h4>}
        <button>Add a Card</button>
    </div>
}