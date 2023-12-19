import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import * as quizzService from "../services/quizzServices";
import * as likeService from "../services/likeServices";
import styles from "./Details.module.css";

export const Details = ({
    user,
    isMainActive,
    isMainActiveHandler,
}) => {
    const [quizz, setQuizz] = useState({});
    const [isOwner, setIsOwner] = useState(false);
    const [likes, setLikes] = useState([]);
    const { quizzId } = useParams();

    const navigate = useNavigate();

    // useEffect(() => {
    //     likeService.getById(quizzId)
    //         .then(res => res.json())
    //         .then(likeData => {
    //             console.log(likeData)
    //             setLikes(likeData);
    //             console.log(likes);
    //         })
    // }, []);


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
        navigate(`/edit/${quizzId}`);
    }
    const onDeleteClickHandler = () => {
        navigate(`/delete/${quizzId}`);
    }
    const onLikeClickHandler = () => {
        navigate(`/like/${quizzId}`);
    }


    return (
        <section className={styles.section}>
            <div className={`popup-info ${isMainActive ? 'active' : ''}`}>
                <h2>{quizz.category}</h2>
                {/* <img className="" src={quizz.imageUrl}/> */}
                <span className="info">{quizz.description}</span>
                <span className="info">{quizz.level}</span>
                <span className="info">Likes: 0</span>
                <div className="btn-group">
                    {isOwner &&
                        <>
                            <button onClick={onEditClickHandler} className="info-btn edit-btn">Edit</button>
                            <button onClick={onDeleteClickHandler} className="info-btn del-btn">Delete</button>
                        </>
                    }

                    <button className="info-btn catalog-btn" onClick={onClickButtonBackHandler}>Back to catalog</button>

                    {user._id && !isOwner && !user.hasLikes &&
                        <>
                            <input onClick={onLikeClickHandler} className="info-btn like-btn" type="button" value="Like" />
                        </>
                    }
                </div>
            </div>
        </section>
    );
}