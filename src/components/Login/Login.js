import { Link, useNavigate } from "react-router-dom";

import * as authService from "../services/authService";
import styles from './Login.module.css';

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
        <section className={styles.section}>
            <div className="wrapper">
                <form onSubmit={onSubmitHandler}>
                    <h1>Login</h1>
                    <div className="input-box">
                        <input type="text" placeholder="Email" required  name="email" autoComplete="on"/>
                        <i className='bx bxs-user-circle'></i>
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Password" required name="password" autoComplete="on"/>
                        <i className='bx bxs-lock-alt' ></i>
                    </div>

                    <button type="submit" className="btn">Login</button>
                    <div className="register-link">
                        <p>
                            Don't have an account?
                            <Link to="/register">Register</Link>
                        </p>
                    </div>
                </form>
            </div>
        </section>
    );
}