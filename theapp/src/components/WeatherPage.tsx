import React, {useEffect, useState} from "react";
import weatherStore from "../stores/weatherStore";
import WeatherList, { Weather } from "./WeatherList";
import {Link} from "react-router-dom";
import {loadForecasts, deleteForecast} from "../actions/weatherActions";
import {Forecast} from "../models/Forecast";
import {toast} from "react-toastify";

const WeatherPage: React.FC = () => {
    const [weather, setWeather] = useState(weatherStore.getAllForecasts());

    useEffect(() => {
        weatherStore.addChangeListener(onChange);
        if (weatherStore.getAllForecasts().length === 0) {
            loadForecasts();
        }
        return () => weatherStore.removeChangeListener(onChange);
    }, [])

    function onChange() {
        setWeather(weatherStore.getAllForecasts());
    }

    return (
        <>
            <h2>Weather</h2>
            <Link className="btn btn-primary" to="/forecast">Forecast</Link>
            <WeatherList weather={weather} deleteForecast={(forecast: Forecast) => {
                let deletePromise = deleteForecast(forecast)
                toast.warning("Forecast deleted");
                return deletePromise;
            }} />
        </>
    )
}

export default WeatherPage;