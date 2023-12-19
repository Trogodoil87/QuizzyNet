import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import * as authService from "../services/authService";
import styles from './User.module.css';

export const User = () => {
    const [userProfile, setUserProfile] = useState({});
    const navigate = useNavigate();

    // useEffect(() => {
    //     const authToken = localStorage.getItem('token');
    //     authService.myProfile(authToken)
    //         .then(res => res.json())
    //         .then(userData => {
    //             setUserProfile(userData);
    //         })
    // }, []);
    const onButtonClickHandler = (e) => {
        // navigate('/catalog')
    }
    return (
        <section className="user">
            <div className="user-content">
                <h1>{userProfile._email || "Pesho"}</h1>
                <h3>QuizzyNet User</h3>
                <button onClick={onButtonClickHandler} className="btn-profile">Back To Catalog</button>
            </div>
        </section>
    );
}