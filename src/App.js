import { Routes, Route } from "react-router-dom";

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

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/search' element={<Search />} />
                <Route path='/catalog' element={<Catalog />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/create' element={<Create />} />
                <Route path='/edit/:quizId' element={<Edit />} />
                <Route path='/about' element={<AboutUs />} />
            </Routes >
            <Footer />
        </>

    );
}

export default App;
