import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { QuizzContext } from "../../context/QuizzContext";
import styles from "./CatalogItem.module.css";

export const CatalogItem = ({
    quizz,
}) => {
    // const { user } = useContext(QuizzContext);
    // const [isOwner, setIsOwner] = useState(false);
    const navigate = useNavigate();

    // useEffect(() => {
    //     if (user._id === quizz._ownerId) {
    //         setIsOwner(true);
    //     } else {
    //         setIsOwner(false);
    //     }
    // }, [user._id, quizz._ownerId]);

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
        // <section className={styles.section}>
        //     <div>
        //         <img className={styles.imageSize} src={quizz.imageUrl} alt="quizz item" />
        //     </div>
        //     <div>
        //         <h1>{quizz.category}</h1>
        //         <h4>
        //             <Link to={`/quizz/${quizz._id}`}><span className={styles.catalogItemTxt}>QuizzTime</span></Link>
        //             <button onClick={onDetailsClickHandler} to={`/details/${quizz._id}`}><span className={styles.catalogItemTxt}>Details</span></button>
        //             {isOwner &&
        //                 <>
        //                     <Link to={`/edit/${quizz._id}`}><span className={styles.catalogItemTxt}>Edit</span></Link>
        //                     <Link to={`/delete/${quizz._id}`}><span className={styles.catalogItemTxt}>Delete</span></Link>
        //                 </>
        //             }
        //         </h4>
        //         <h5>posted <span>by</span> <Link to={`/profile/${quizz._id}`}><span className={styles.catalogItemTxt}>{quizz.owner}</span></Link><div>Level: {quizz.level}</div></h5>
        //         <p >
        //             {quizz.description}
        //         </p>
        //     </div>

        // </section>
    );
}