



export default function Signup() {


    return <div>
        <form>
            <label htmlFor="email">Email</label> <br />
            <input type="email" id="email" required />
            <br />
            <label htmlFor="password">Password</label> <br />
            <input type="password" id="password" minLength={8} maxLength={8} required />
            <br />
            <label htmlFor="cpassword">Confirm Password</label> <br />
            <input type="password" id="cpassword" minLength={8} maxLength={8} required />
            <br />
            <button type="submit" value={"SignUp"}>SignUp </button>
        </form>

    </div>
}