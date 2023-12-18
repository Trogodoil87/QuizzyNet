import { useNavigate, useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

import * as quizzService from "../services/quizzServices";

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
    return (
        <section id="details-page">
            <h1>{quizz.category}</h1>
            <div className="info-section">

                <div>
                    <img src={quizz.imageUrl} alt="some img" />
                    <span className="detail-description">{quizz.description}</span>
                </div>
                <div className="buttons">
                    {isOwner &&
                        <>
                            <Link to={`/edit/${quizzId}`} className="button">Edit</Link>
                            <Link to={`/delete/${quizzId}`} className="button">Delete</Link>
                        </>
                    }
                    <button onClick={onClickButtonBackHandler}>Back to catalog</button>
                </div>
            </div>

            <article className="add-like">
                <label>Likes: 0</label>
                {user._id &&
                    <>
                        <input className="btn like" type="button" value="Like" />
                        <input className="btn dislike" type="button" value="Dislike" />
                    </>
                }
            </article>

        </section>
    );
}