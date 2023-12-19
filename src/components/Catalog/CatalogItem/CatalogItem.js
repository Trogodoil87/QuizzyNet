import {  useNavigate } from "react-router-dom";

import styles from "./CatalogItem.module.css";

export const CatalogItem = ({
    quizz,
}) => {
    const navigate = useNavigate();

    const onDetailsClickHandler = () => {
        navigate(`/details/${quizz._id}`);
    }

    return (
        <section className={styles.section}>
            <div className="catalog-info">
                <h2>{quizz.category}</h2>
                <div className="catalog-container">
                    <img className="catalog-img" src={quizz.imageUrl} alt="QuizzyNet" />
                </div>
                <div>
                    <span className="info">{quizz.description}</span>
                </div>
                <div>
                    <span className="info">{quizz.level}</span>
                </div>
                <div>
                    <span className="info">Likes: 0</span>
                </div>
                <div className="btn-group">
                    <input onClick={onDetailsClickHandler} className="catalog-btn details-btn" type="button" value="Details" />
                    <h5>posted <span>by</span> <span className={styles.catalogItemTxt}>{quizz.owner}</span><div>Level: {quizz.level}</div></h5>
                </div>
            </div>
        </section>
    );
}