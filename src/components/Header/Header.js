import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import styles from "./Header.module.css";

export const Header = ({
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
        <header className={styles.headerSection}>
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
            <nav>
                <div>
                    <ul className={styles.nonBullet}>
                        <div>
                            <p className={styles.profile}>{user.email}</p>
                        </div>
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
                                <button className={styles.headerButtonStyle} onClick={onMyAccoutClickHandler}><span>my account</span></button>

                                <li className={styles.navLi}>
                                    <Link to="/create"><span className={styles.linkColour}>create</span></Link>
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