import axios from "axios"
import { useContext } from "react"
import { myContext } from "../Context/Context"



export default function Signup() {

    const { signup, Setsignup } = useContext(myContext)

   // console.log(signup)
    return <div>
        <form onSubmit={async (e) => {
            e.preventDefault()
            axios.post("http://localhost:8000/user/new", {
                email: signup.email,
                password: signup.password

            })


                .then(response => {
                    // localStorage.setItem("Token",res)
                    console.log("SIGNUP")
                    console.log(response)
                })
                .catch(err => {
                    console.log(err)
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
            <button type="submit" value={"SignUp"}>SignUp </button>
        </form>

    </div>
}