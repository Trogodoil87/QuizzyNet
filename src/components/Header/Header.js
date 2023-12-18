import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export const Header = ({
    user,
}) => {
    return (
        <header className={styles.headerSection}>
            <nav>
                <ul className={styles.nonBullet}>
                    <div>
                        <li className={styles.navLi}>
                            <select name="language" id="language">
                                <option value="default">EN</option>
                                <option value="BG">BG</option>
                            </select>
                        </li>
                    </div>
                </ul>
                <div>
                    <p>{user.email}</p>
                </div>
                <div>
                    <ul className={styles.nonBullet}>
                        <li className={styles.navLi}>
                            <Link to="/"><span className={styles.linkColour}>home</span></Link>
                        </li>
                        <li className={styles.navLi}>
                            <Link to="/search"><span className={styles.linkColour}>search</span></Link>
                        </li>
                        <li className={styles.navLi}>
                            <Link to="/catalog"><span className={styles.linkColour}>catalog</span></Link>
                        </li>
                        <li className={styles.navLi}>
                            <Link to="/about"><span className={styles.linkColour}>about us</span></Link>
                        </li>
                        {Object.values(user).length > 0 ?
                            <>
                                <li className={styles.navLi}>
                                    <Link to="/create"><span className={styles.linkColour}>create</span></Link>
                                </li>
                                <li className={styles.navLi}>
                                    <Link to="/account/:id"><span className={styles.linkColour}>my account</span></Link>
                                </li>
                                <li className={styles.navLi}>
                                    <Link to="/logout"><span className={styles.linkColour}>logout</span></Link>
                                </li>
                            </>
                            :
                            <>
                                <li className={styles.navLi}>
                                    <Link to="/login"><span className={styles.linkColour}>login</span></Link>
                                </li>
                                <li className={styles.navLi}>
                                    <Link to="/register"><span className={styles.linkColour}>register</span></Link>
                                </li>
                            </>
                        }
                    </ul>
                </div>
            </nav>
        </header>
    );
}