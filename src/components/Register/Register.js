import { Link, useNavigate } from "react-router-dom";

import styles from "./Register.module.css"
import * as authService from "../services/authService";

export const Register = ({
    userLogin,
}) => {
    const navigate = useNavigate();
    function onSubmitHandler(e) {

        e.preventDefault();
        const formData = new FormData(e.target);
        const email = formData.get("email");
        const password = formData.get("password");
        const confirmPassword = formData.get("confirmPassword");

        if (password !== confirmPassword) {
            return;
            //to do add alert
        }

        authService.register(email, password)
            .then(res => res.json())
            .then(authData => {
                if (authData.code === 409) {
                    return;
                }
                userLogin(authData);
                navigate('/');
            })

    }
    return (
        <section className={styles.section}>
            <div className="wrapper">
                <form onSubmit={onSubmitHandler}>
                    <h1>Register</h1>
                    <div className="input-box">
                        <input type="text" placeholder="Email" required name="email" autoComplete="on" />
                        <i className='bx bxs-user-circle'></i>
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Password" required name="password" autoComplete="on" />
                        <i className='bx bxs-lock-alt' ></i>
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Confirm Password" required name="confirmPassword" autoComplete="on" />
                        <i className='bx bxs-lock-alt' ></i>
                    </div>

                    <button type="submit" className="btn">Register</button>
                    <div className="register-link">
                        <p>
                            Have account?
                            <Link to="/login">Login</Link>
                        </p>
                    </div>
                </form>
            </div>
        </section>
    );
}