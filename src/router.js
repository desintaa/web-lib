import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Home from './pages/home/home'
import Login from './components/form/formLogin'
import Register from './components/form/formRegister'
import Detail from './pages/detail/detail'

function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/register" element={<Register />} />
                <Route exact path="/detail/:title" element={<Detail />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router