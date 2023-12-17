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

function App() {
    const [quizzes, setQuizzes] = useState([]);
    const [user, setUser] = useState({});

    useEffect(() => {
        quizzService.getAll()
            .then(res => res.json())
            .then(result => {
                setQuizzes(result);
            })
        console.log(user)
    }, []);

    const userLogin = (userData) => {
        console.log(userData);
        localStorage.setItem('token', userData.accessToken);
        setUser(userData);
    }

    const userLogout = () => {
        setUser({});
    }
    
    return (
        <QuizzContext.Provider value={{ quizzes, userLogout, user }}>
            <Header user={user} />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/search' element={<Search />} />
                <Route path='/catalog' element={<Catalog />} />
                <Route path='/login' element={<Login userLogin={userLogin} />} />
                <Route path='/register' element={<Register />} />
                <Route path='/create' element={<Create />} />
                <Route path='/edit/:quizId' element={<Edit />} />
                <Route path='/edit/:quizId' element={<Edit />} />
                <Route path='/about' element={<AboutUs />} />
                <Route path='/logout' element={<Logout />} />
            </Routes >
            <Footer user={user} />
        </QuizzContext.Provider>

    );
}

export default App;
