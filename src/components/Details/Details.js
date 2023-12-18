import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import * as quizzService from "../services/quizzServices";
import styles from "./Details.module.css";

export const Details = ({
    user,
}) => {
    const { quizzId } = useParams();
    const [isOwner, setIsOwner] = useState(false);
    const [quizz, setQuizz] = useState({});
    const navigate = useNavigate();


    useEffect(() => {
        quizzService.getById(quizzId)
            .then(res => res.json())
            .then(quizzData => {
                setQuizz(quizzData);
            })
    }, [quizzId]);

    useEffect(() => {
        if (user._id === quizz._ownerId) {
            setIsOwner(true);
        } else {
            setIsOwner(false);
        }
    }, [user._id, quizz._ownerId]);

    const onClickButtonBackHandler = () => {
        navigate('/catalog')
    }

    const onEditClickHandler = () => {
        navigate(`/edit/${quizzId}`)
    }
    const onDeleteClickHandler = () => {
        navigate(`/delete/${quizzId}`)
    }
    return (
        <section id="details-page">
            <h1>{quizz.category}</h1>
            <div className="info-section">

                <div>
                    <img src={quizz.imageUrl} alt="some img" />
                    <span className="detail-description">{quizz.description}</span>
                </div>
                <div className="button-section">
                    {isOwner &&
                        <>
                            <button onClick={onEditClickHandler} className={styles.detailsButtonEffect}><span >Edit</span></button>
                            <button onClick={onDeleteClickHandler} className={styles.detailsButtonEffect}><span >Delete</span></button>
                        </>
                    }
                    <button className={styles.detailsButtonEffect} onClick={onClickButtonBackHandler}>Back to catalog</button>
                </div>
            </div>

            <article className="add-like">
                <label>Likes: 0</label>
                {user._id &&
                    <>
                        <input className={styles.detailsButtonEffect} type="button" value="Like" />
                    </>
                }
            </article>

        </section>
    );
}