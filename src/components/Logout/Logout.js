import { useNavigate } from "react-router-dom"
import { useContext, useEffect } from "react";

import { QuizzContext } from "../context/QuizzContext";
import * as authService from "../services/authService";

export const Logout = () => {
    const navigate = useNavigate();
    const { userLogout, user } = useContext(QuizzContext);

    useEffect(() => {
        authService.logout(user.accessToken)
            .then(() => {
                userLogout();
                navigate('/');
            })
            .catch(() => {
                navigate('/');
            })
    });
}