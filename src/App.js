import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import * as quizzService from "./components/services/quizzServices";
import { QuizzContext } from "./components/context/QuizzContext";

import { Catalog } from "./components/Catalog/Catalog";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { AboutUs } from "./components/About/AboutUs";
import { Search } from "./components/Search/Search";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { Create } from "./components/Create/Create";
import { Edit } from "./components/Edit/Edit";
import { Home } from "./components/Home/Home";
import { Logout } from "./components/Logout/Logout";
import { Delete } from "./components/Delete/Delete";

function App() {
    const [quizzes, setQuizzes] = useState([]);
    const [user, setUser] = useState({});

    useEffect(() => {
        quizzService.getAll()
            .then(res => res.json())
            .then(result => {
                setQuizzes(result);
                console.log(result);
            })
    }, []);

    const userLogin = (userData) => {
        localStorage.setItem('token', userData.accessToken);
        setUser(userData);
    }

    const userLogout = () => {
        setUser({});
    }

    const createQuizz = (quizz) => {
        console.log(quizz);
        setQuizzes(quizz);
    }

    const onCatalogRefresh = (newQuizzes) => {
        setQuizzes(newQuizzes);
    }

    const onDeleteHandler = (e, quizz) => {
        console.log(quizz);
    }

    return (
        <QuizzContext.Provider value={{ quizzes, userLogout, user, onCatalogRefresh, onDeleteHandler }}>
            <Header user={user} />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/search' element={<Search />} />
                <Route path='/catalog' element={<Catalog />} />
                <Route path='/login' element={<Login userLogin={userLogin} />} />
                <Route path='/register' element={<Register />} />
                <Route path='/create' element={<Create onCreateQuizz={createQuizz} />} />
                <Route path='/edit/:quizzId' element={<Edit />} />
                <Route path='/delete/:quizzId' element={<Delete />} />
                <Route path='/about' element={<AboutUs />} />
                <Route path='/logout' element={<Logout />} />
            </Routes >
            <Footer user={user} />
        </QuizzContext.Provider>

    );
}

export default App;
