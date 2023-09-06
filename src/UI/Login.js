


export default function Login() {


    return <div>
        <form>
            <label htmlFor="email">Email</label>
            <br />
            <input type="email" placeholder="write email here" id="email" required />
            <br />
            <label htmlFor="password">Password</label>
            <br />
            <input type="password" id="password" required placeholder="Password" />
            <br />
            <button type="submit" >Login</button>
        </form>
    </div>
}