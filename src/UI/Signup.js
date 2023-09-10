import axios from "axios"
import { useContext } from "react"
import { myContext } from "../Context/Context"
import { useNavigate } from "react-router-dom"


export default function Signup() {

    const { signup, Setsignup } = useContext(myContext)

    const navigate = useNavigate()

    // console.log(signup)
    return <div className="login">
        <form  className="login_form" onSubmit={async (e) => {
            e.preventDefault()
            axios.post("https://kanaban-system.onrender.com/user/new", {
                email: signup.email,
                password: signup.password

            })


                .then(response => {
                    // localStorage.setItem("Token",res)
                    console.log("SIGNUP")
                    console.log(response)
                    if (Number(response.status) == 200) {
                        alert("user registered successfully")
                        navigate("/")
                    }

                })
                .catch(err => {
                    console.log("error")
                    console.log(err.response.status)
                    if (err.response.status == 400) {
                        alert("user already exist")
                    } else {
                        alert("Internal server error")
                    }
                })

        }} >
            <label htmlFor="email">Email</label> <br />
            <input type="email" id="email" required
                onChange={(e) => {
                    Setsignup({
                        ...signup,
                        email: e.target.value
                    })
                }}
                value={signup.email}
            />
            <br />
            <label htmlFor="password">Password</label> <br />
            <input type="password" id="password" minLength={8} maxLength={8} required
                onChange={(e) => {
                    Setsignup({
                        ...signup,
                        password: e.target.value
                    })
                }}
                value={signup.password}
            />
            <br />
            <div className="btn_cover">
                <button className="btn" type="submit" value={"SignUp"}>SignUp </button>
                <br />
                <a href="/">Login</a>
            </div>
        </form>

    </div>
}