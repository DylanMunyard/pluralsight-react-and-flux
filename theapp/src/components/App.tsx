import React from "react";
import {Route, Routes, Navigate} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import WeatherPage from "./WeatherPage";
import NotFound from "./NotFound";
import ManageForecastPage from "./ManageForecastPage";

const App: React.FC = () => {
    return (
        <div className="container-fluid">
            <ToastContainer autoClose={3000} hideProgressBar={false} />
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/weather" element={<WeatherPage />} />
                <Route path="/forecast/:id" element={<ManageForecastPage />} />
                <Route path="/forecast" element={<ManageForecastPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/about-page" element={<Navigate replace to="/about" />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </div>
    )
}

export default App;