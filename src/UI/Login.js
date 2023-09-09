import axios from "axios";
import { useContext } from "react";
import { myContext } from "../Context/Context";
import { gettask } from "../Logic/gettask";

export default function Login() {

    const { login, Setlogin, Setkanban, Setgettask } = useContext(myContext)




    return <div>
        <form method="POST" onSubmit={(e) => {
            e.preventDefault();
            axios.post("http://localhost:8000/user/login", {
                email: login.email,
                password: login.password

            })
                .then(response => {
                    // console.log(response.data.Token)
                    localStorage.setItem("token", response.data.Token)
                    localStorage.setItem("owner", response.data.user)
                    axios.get(`http://localhost:8000/kanban/get/${localStorage.getItem("owner")}`)
                        .then(data => {
                            Setkanban(data.data)
                            gettask().then((array) => {
                               // console.log("array");
                               // console.log(array)
                                Setgettask(array)
                            })
                        })
                        .catch(err => {
                            console.log(err);
                            alert("Unable to fetch data for the user")
                        })
                })
                .catch(err => {
                    console.log(err)
                })

        }} >
            <label htmlFor="email">Email</label>
            <br />
            <input type="email"
                placeholder="write email here"
                id="email" required
                value={login.email}
                onChange={(e) => {
                    Setlogin({
                        ...login,
                        email: e.target.value
                    })
                }}
            />
            <br />
            <label htmlFor="password">Password</label>
            <br />
            <input type="password" id="password" required placeholder="Password" value={login.password}
                onChange={(e) => {
                    Setlogin({
                        ...login,
                        password: e.target.value
                    })
                }}
            />
            <br />
            <button type="submit" >Login</button>
        </form>
        <div>
            {/*Kanabn != null || Kanabn != undefined ? <div>
                {Kanabn.map(data => {
                    return <div>
                        <div>  {data.Kanban} </div>
                        <button onClick={() => {
                            console.log("clicked to add task")
                            Addnewtask(data.Kanban, "Test2 task")
                        }} >Add new task</button>
                    </div>
                })}
            </div> : <div>Not any list to show</div>*/}
        </div>
    </div>
}