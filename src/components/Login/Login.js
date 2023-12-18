import { Link, useNavigate } from "react-router-dom";

import * as authService from "../services/authService";

export const Login = ({
    userLogin,
}) => {
    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const email = formData.get('email');
        const password = formData.get('password');

        authService.login(email, password)
            .then(res => res.json())
            .then(authData => {
                if (authData.code === 403) {
                    return;
                }
                console.log(authData);
                userLogin(authData);
                navigate('/');
            })
    }
    return (
        <section id="login">
            <form onSubmit={onSubmitHandler}>
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