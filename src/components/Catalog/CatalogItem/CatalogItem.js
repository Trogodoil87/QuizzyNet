import styles from "./CatalogItem.module.css";
import { Link } from "react-router-dom";
export const CatalogItem = () => {
    return (
        <section id="catalog-item-section" className={styles.sectionItem}>
            <div>
                <img className={styles.imageSize} src="assets/quizImg.jpg" alt="quizz item" />
            </div>
            <div>
                <h1>HTML</h1>
                <h2 >
                    <Link to="/quizz/:quizzId"><span className={styles.catalogItemTxt}>QuizzTime</span></Link>
                    <Link to="/edit/:quizzId"><span className={styles.catalogItemTxt}>Edit</span></Link>
                    <Link to="/delete/:quizzId"><span className={styles.catalogItemTxt}>Delete</span></Link>
                </h2>
                <h4>posted <span>by</span> <Link to="/profile/:profileId"><span className={styles.catalogItemTxt}>admin</span></Link>Level: <span>Beginner</span></h4>
                <p >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet velit vitae perferendis ullam ea consectetur modi voluptatibus, officiis sapiente? Harum blanditiis minima corrupti praesentium voluptatibus quas hic distinctio quis placeat.
                </p>
            </div>

        </section>
    );
}