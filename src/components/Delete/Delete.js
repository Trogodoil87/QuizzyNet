import { useNavigate, useParams } from "react-router-dom"
import { useContext, useEffect } from "react";

import { QuizzContext } from "../context/QuizzContext";
import * as quizzService from "../services/quizzServices";

export const Delete = () => {
    const { quizzId } = useParams();

    const navigate = useNavigate();
    const { user } = useContext(QuizzContext);

    useEffect(() => {
        quizzService.remove(quizzId, user.accessToken)
            .then(() => {
                navigate('/catalog');
            })
            .catch(() => {
                navigate('404');
            })
    });
}