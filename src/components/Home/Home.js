// import { Link } from "react-router-dom";
import styles from "./Home.module.css"
export const Home = () => {
    return (
        <section id="home-page" className={styles.section}>
            <div>
                <div className={styles.heading}>
                    <h1>Welcome to the world of quizzes</h1>
                </div >
                {/* <img src="/assets/quizimg.jpg" alt="some background" /> */}
                <div>
                    <h2>
                        Ready to share your knowledge? The Home Page provides easy access to our quiz creation tools. Become a quiz creator and share your expertise with the QuzzyNet community.
                    </h2>
                </div>
            </div>
        </section >
    );
}

