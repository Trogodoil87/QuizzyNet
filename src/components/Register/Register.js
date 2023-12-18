import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import styles from "./Register.module.css"
import * as authService from "../services/authService";

export const Register = ({
    userLogin,
}) => {
    const navigate = useNavigate();
    const [onErr, setOnErr] = useState(false);

    function onSubmitHandler(e) {

        e.preventDefault();
        const formData = new FormData(e.target);
        const email = formData.get("email");
        const password = formData.get("password");
        const confirmPassword = formData.get("confirmPassword");

        if (password !== confirmPassword) {
            setOnErr(true);
            return;
            //to do add alert
        }

        setOnErr(false);
        authService.register(email, password)
            .then(res => res.json())
            .then(authData => {
                userLogin(authData);
                navigate('/');
            })

    }
    return (
        <section id="login">
            <form onSubmit={onSubmitHandler} >
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
                        <input type="password" id="login-confirm-password" name="confirmPassword" />
                    </div>
                    <div>
                        <input type="submit" className="btn submit" value="Register" />
                    </div>
                    {onErr && <div><p className={styles.onError}>Password's dont match</p></div>}

                    <p>
                        <span>Already a member? <Link to="/login">Click Here</Link></span>
                    </p>
                </div>
            </form>
        </section >
    );
}