import styles from "./Footer.module.css";

export const Footer = () => {
    return (
        <container className={styles['footer-container']}>
            <footer className={styles.footer}>
                <div className={styles['footer-scrollup']}>
                    <a className="navbar-brand" href="/catalog">Quizzy<span>Net</span></a>
                </div>
                <a className={styles.scroll} href="#works">how it works</a>
                <a className={styles.scroll} href="#contact">contact</a>
                <a className={styles.scroll} href="#contact">about us</a>
                <a className={styles.scroll} href="#contact">subscribe</a>
                <a className={styles.scroll} href="#contact">my account</a>
            </footer>
        </container>
    );
}