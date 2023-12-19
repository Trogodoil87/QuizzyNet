import { useNavigate, useParams } from "react-router-dom"
import { useContext, useEffect } from "react";

import { QuizzContext } from "../context/QuizzContext";
import * as quizzService from "../services/quizzServices";

export const Like = () => {
    const navigate = useNavigate();
    const { user } = useContext(QuizzContext);
    const { quizzId } = useParams();

    useEffect(() => {
        quizzService.getById(quizzId)
            .then(res => res.json())
            .then(quizz => {
                const newLikes = quizz.likes + 1;

                quizzService.like(quizzId, quizz, newLikes, user.accessToken)
                    .then(() => {
                        navigate(`/details/${quizzId}`);
                    })
                    .catch(() => {
                        navigate('/404');
                    })
            })

    });
}