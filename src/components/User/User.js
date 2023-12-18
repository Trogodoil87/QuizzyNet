import { useEffect, useState } from "react";

import * as authService from "../services/authService";
import styles from './User.module.css';

export const User = () => {
    const [userProfile, setUserProfile] = useState({});

    useEffect(() => {
        const authToken = localStorage.getItem('token');
        authService.myProfile(authToken)
            .then(res => res.json())
            .then(userData => {
                setUserProfile(userData);
            })
    }, []);

    return (
        <section className={styles.section}>
            <div>
                <div>
                    <h1>{userProfile._email}</h1>
                </div>
                <div>
                    <label>Quizzes Created: <span>0</span></label>
                </div>
                <div>
                    <label>Quizzes Liked: <span>0</span></label>
                </div>
            </div>
        </section>
    );
}