import { Link } from "react-router-dom";

import styles from "./Footer.module.css";

export const Footer = () => {
    return (
            <footer className={styles.footerSection}>
                <Link className={styles.navLi} to="/catalog"><span className={styles.linkColour}>Quizzy Net</span></Link>
                <Link className={styles.navLi} to="/"><span className={styles.linkColour}>How it works</span></Link>
                <Link className={styles.navLi} to="/contact"><span className={styles.linkColour}>Contact</span></Link>
                <Link className={styles.navLi} to="/my-account"><span className={styles.linkColour}>My Account</span></Link>
                <Link className={styles.navLi} to="/about"><span className={styles.linkColour}>About Us</span></Link>
            </footer>
    );
}