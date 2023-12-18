import styles from "./Search.module.css";


export const Search = () => {
    return (
        <section id="search" className={styles.section}>
            <div>
                <div>
                    <h2>best place to find and explore that all you need </h2>
                    <p>
                        Find Best Quizzes and practice like never before
                    </p>
                </div>
                <div>
                    <div>
                        <h3>Quizz?</h3>
                        <div >
                            <span>
                                <input type="text" placeholder="EX: HTML, Java, Css" />
                                <button className={styles.searchButtonEffect}>
                                    search
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}