import axios from "axios";
import { useContext } from "react";
import { myContext } from "../Context/Context";
import { gettask } from "../Logic/gettask";
import { useNavigate } from 'react-router-dom';


export default function Login() {

    const { login, Setlogin, Setkanban, Setgettask } = useContext(myContext)

    const navigate = useNavigate()


    return <div className="login"  >
        <form className="login_form" method="POST" onSubmit={(e) => {
            e.preventDefault();
            
            axios.post("https://kanaban-system.onrender.com/user/login", {
                email: login.email,
                password: login.password

            })
                .then(response => {

                    if (response.status == 200) {

                        alert("login Sucessful")

                        localStorage.setItem("token", response.data.Token)
                        localStorage.setItem("owner", response.data.user)

                        axios.get(`https://kanaban-system.onrender.com/kanban/get/${localStorage.getItem("owner")}`)
                            .then(data => {
                                Setkanban(data.data)
                                gettask().then((array) => {
                                    // console.log("array");
                                    // console.log(array)
                                    Setgettask(array);
                                    navigate("/dashboard")
                                })
                            })


                            .catch(err => {
                                console.log(err);
                                alert("Unable to fetch data for the user please try to login again")
                            })
                    }
                })
                .catch(err => {
                    console.log(err)
                    if (err.response.status == 400) {
                        alert("Invalid Credentials")
                    }
                    else if (err.response.status == 500) {
                        alert("user not registered")
                    }
                    else {
                        alert("Internal server error")
                    }

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

            <div className="btn_cover">
                <button className="btn" type="submit" >Login</button>
                <br />
                <a href="/signup" >SignUp</a>
            </div>

        </form>

    </div>
}