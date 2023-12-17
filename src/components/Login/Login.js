import { Link } from "react-router-dom";

export const Login = () => {
    return (
        <section id="login">
            <form>
                <div className="container">
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Sokka@gmail.com" />
                    <label htmlFor="login-pass">Password:</label>
                    <input type="password" id="login-password" name="password" />
                    <input type="submit" className="btn submit" value="Login" />
                    <p>
                        <span>Not a memeber? <Link to="/register">Click Here</Link></span>
                    </p>
                </div>
            </form>
        </section>
    );
}