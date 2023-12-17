import { Link } from "react-router-dom";

export const Register = () => {
    return (
        <section id="login">
            <form>
                <div className="container">
                    <h1>Register</h1>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="Sokka@gmail.com" />
                    </div>
                    <div>
                        <label htmlFor="login-pass">Password:</label>
                        <input type="password" id="login-password" name="password" />
                        <label htmlFor="login-pass">Confirm password:</label>
                        <input type="password" id="login-confirm-password" name="confirm-password" />
                    </div>
                    <div>
                        <input type="submit" className="btn submit" value="Register" />
                    </div>
                    <p>
                        <span>Already a member? <Link to="/login">Click Here</Link></span>
                    </p>
                </div>
            </form>
        </section>
    );
}