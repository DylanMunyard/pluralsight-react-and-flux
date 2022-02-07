import React, {ChangeEvent, FormEvent, useState, useEffect} from 'react';
import ForecastForm from "./ForecastForm";
import weatherStore from "../stores/weatherStore";
import * as weatherActions from "../actions/weatherActions";
import {useNavigate, useParams} from "react-router-dom";
import {toast} from "react-toastify";

interface FieldError {
    [field: string]: string
}

const ManageForecastPage: React.FC = () => {
    let fieldErrors : FieldError = {};
    const [errors, setErrors] = useState(fieldErrors);
    const [forecasts, setForecasts] = useState(weatherStore.getAllForecasts());
    const params = useParams();
    const navigate = useNavigate();
    const [forecast, setForecast] = useState({
        id: 0,
        date: "",
        temperature: 0,
        summary: ""
    })

    useEffect(() => {
        weatherStore.addChangeListener(onChange);
        const id = parseInt(params.id as string, 10);
        if (forecasts.length === 0) {
            weatherActions.loadForecasts();
        } else if (id) {
            setForecast(weatherStore.getForecast(id)); // 2022-02-20 (after) 10-02-2022 (before) yyyy-MM-dd
        }
        return () => weatherStore.removeChangeListener(onChange);
    }, [forecasts.length, params.id])

    function onChange() {
        setForecasts(weatherStore.getAllForecasts());
    }

    function formIsValid() : boolean {
        const _errors : FieldError = {};
        if (!forecast.date) {
            _errors.date = "Date is required";
        }
        if (!forecast.summary) {
            _errors.summary = "Summary is required";
        }

        setErrors(_errors);
        return Object.keys(_errors).length === 0;
    }

    function handleChange({ target }: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        setForecast({...forecast, [target.name]: target.value});
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (!formIsValid()) return;

        weatherActions.saveForecast(forecast).then(() => {
            toast.success('Forecast saved');
            navigate("/weather");
        });
    }

    return (
        <>
            <h2>Manage Forecast</h2>
            <ForecastForm
                forecast={forecast}
                errors={errors}
                onChange={handleChange}
                onSubmit={handleSubmit} />
        </>
    );
}

export default ManageForecastPage;