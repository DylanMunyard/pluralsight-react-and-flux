import {EventEmitter} from "events";
import appDispatcher from "../appDispatcher";
import {Forecast} from "../models/Forecast";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";
let _forecasts = new Array<Forecast>();

class ForecastStore extends EventEmitter {
    addChangeListener(callback: (...args: any[]) => void) {
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback: (...args: any[]) => void) {
        this.removeListener(CHANGE_EVENT, callback);
    }

    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    getAllForecasts() {
        return _forecasts;
    }

    getForecast(id: number) : Forecast {
        return _forecasts.find(forecast => forecast.id === id) as Forecast;
    }
}

const store = new ForecastStore();
appDispatcher.register((action: any) => {
    switch (action.actionType) {
        case actionTypes.CREATE_FORECAST: {
            _forecasts.push(action.forecast);
            store.emitChange();
            break;
        }
        case actionTypes.LOAD_FORECASTS: {
            _forecasts = action.forecasts;
            store.emitChange();
            break;
        }
        case actionTypes.UPDATE_FORECAST: {
            _forecasts = _forecasts.map(forecast => {
                return forecast.id === action.forecast.id ? action.forecast : forecast
            });
            store.emitChange();
            break;
        }
        case actionTypes.DELETE_FORECAST: {
            _forecasts = _forecasts.filter(forecast => {
                return forecast.id !== action.forecast.id;
            });
            store.emitChange();
            break;
        }
        default: {
            // no-op
            break;
        }
    }
});
export default store;