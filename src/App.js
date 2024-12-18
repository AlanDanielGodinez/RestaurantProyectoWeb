// src/App.js
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Recetas from "./pages/Recetas";
import Menu from "./pages/Menu";
import Reserva from "./pages/Reserva";

// Componente para manejar títulos dinámicos
const PageWrapper = ({ children, title }) => {
    useEffect(() => {
        document.title = title; // Cambia el título de la página
    }, [title]);

    return <>{children}</>;
};

function App() {
    return (
        <Router>
            <Navbar />
            <div className="container main">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <PageWrapper title="Home - Restaurante">
                                <Home />
                            </PageWrapper>
                        }
                    />
                    <Route
                        path="/Recetas"
                        element={
                            <PageWrapper title="Recetas - Restaurante">
                                <Recetas />
                            </PageWrapper>
                        }
                    />
                    <Route
                        path="/Menu"
                        element={
                            <PageWrapper title="Menú - Restaurante">
                                <Menu />
                            </PageWrapper>
                        }
                    />
                    <Route
                        path="/reserva"
                        element={
                            <PageWrapper title="Reserva - Restaurante">
                                <Reserva />
                            </PageWrapper>
                        }
                    />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
}

export default App;
