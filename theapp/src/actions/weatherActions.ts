import dispatcher from "../appDispatcher";
import * as weatherApi from '../api/weatherApi';
import actionTypes from "./actionTypes";
import {Forecast} from "../models/Forecast";

export function saveForecast(forecast: Forecast) {
    return weatherApi.saveForecast(forecast).then((savedForecast: Forecast) => {
        dispatcher.dispatch({
            actionType: forecast.id ? actionTypes.UPDATE_FORECAST : actionTypes.CREATE_FORECAST,
            forecast: savedForecast
        });
    });
}

export function deleteForecast(forecast: Forecast) {
    return weatherApi.deleteForecast(forecast.id).then(() => {
        dispatcher.dispatch({
            actionType: actionTypes.DELETE_FORECAST,
            forecast: forecast
        });
    });
}

export function loadForecasts() {
    return weatherApi.getWeather().then((forecasts: Forecast[]) => {
        dispatcher.dispatch({
            actionType: actionTypes.LOAD_FORECASTS,
            forecasts: forecasts
        });
    });
}