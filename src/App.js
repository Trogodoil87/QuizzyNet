import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import * as quizzService from "./components/services/quizzServices";
import { QuizzContext } from "./components/context/QuizzContext";
import styles from "./App.module.css";

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
import { Details } from "./components/Details/Details";
import { User } from "./components/User/User";
import { Like } from "./components/Like/Like";
import { NotFound } from "./components/404/404";

function App() {
    const [quizzesData, setQuizzesData] = useState([]);
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        quizzService.getAll()
            .then(res => {
                if (!res.status === 404) {
                    return res.json();
                }
            })
            .then(quizzData => {
                if (quizzData === undefined) {
                    return setQuizzesData({ onDataError: true });
                } else {
                    return setQuizzesData({ ...quizzData, onDataError: false })
                }
            })
    }, []);


    const userLogin = (userData) => {
        localStorage.setItem('token', userData.accessToken);
        setUser(userData);
    }

    const userLogout = () => {
        setUser({});
    }

    const createQuizz = (quizzData) => {
        setQuizzesData(state => [
            ...state,
            {
                ...quizzData,
                owner: quizzData._ownerId
            }
        ]);
        console.log(quizzData);
        navigate('/catalog');
    }

    const editQuizz = (quizzData) => {
        setQuizzesData((oldState) => {
            let state = oldState.filter(x => x._id !== quizzData._id);
            return [...state, { ...quizzData, owner: quizzData._ownerId }];
        });
    }

    const onCatalogRefresh = (newQuizzes) => {
        setQuizzesData(newQuizzes);
    }


    return (
        <div className={styles.globalIMG}>
            <QuizzContext.Provider value={{ quizzes: quizzesData, userLogout, user, onCatalogRefresh }}>
                <Header user={user} />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/search' element={<Search />} />
                    <Route path='/catalog' element={<Catalog />} />
                    <Route path='/login' element={<Login userLogin={userLogin} />} />
                    <Route path='/register' element={<Register userLogin={userLogin} />} />
                    <Route path='/create' element={<Create createQuizz={createQuizz} />} />
                    <Route path='/edit/:quizzId' element={<Edit editQuizz={editQuizz} />} />
                    <Route path='/details/:quizzId' element={<Details user={user} />} />
                    <Route path='/me/:userId' element={<User user={user} />} />
                    <Route path='/delete/:quizzId' element={<Delete />} />
                    <Route path='/about' element={<AboutUs />} />
                    <Route path='/like/:quizzId' element={<Like />} />
                    <Route path='/logout' element={<Logout />} />
                    <Route path='/*' element={<NotFound />} />
                </Routes >
                <Footer user={user} />
            </QuizzContext.Provider>
        </div>
    );
}

export default App;
