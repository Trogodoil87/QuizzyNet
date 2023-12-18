import { Link, useNavigate } from "react-router-dom";

import styles from "./Footer.module.css";
import { useEffect, useState } from "react";

export const Footer = ({
    user,
}) => {
    const [isUser, setIsUser] = useState(false);
    const navigate = useNavigate();

    const onMyAccoutClickHandler = () => {
        if (isUser) {
            navigate(`/me/${user._id}`);
        } else {
            navigate('/login');
        }
    };

    useEffect(() => {
        if (user._id) {
            setIsUser(true);
        } else {
            setIsUser(false);
        }
    }, [user._id]);


    return (
        <footer className={styles.footerSection}>
            <Link className={styles.navLi} to="/contact"><span className={styles.linkColour}>Contact</span></Link>
            <button className={styles.navLi} onClick={onMyAccoutClickHandler}><span className={styles.linkColour}>My Account</span></button>
            <Link className={styles.navLi} to="/about"><span className={styles.linkColour}>About Us</span></Link>
        </footer>
    );
}