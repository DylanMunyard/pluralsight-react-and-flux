import React, {ChangeEvent, FormEvent} from 'react';
import TextInput from "./common/TextInput";
import {Forecast} from "../models/Forecast";

export interface Props {
    forecast: Forecast,
    errors: { [field: string]: string },
    onChange: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void,
    onSubmit: (event: FormEvent<HTMLFormElement>) => void
}

const ForecastForm: React.FC<Props> = ({ forecast, onChange, onSubmit, errors }) => {
    return (
        <form onSubmit={onSubmit}>
            <TextInput
                type="date"
                id="date"
                name="date"
                label="Date"
                title="Date of forecast"
                error={errors.date}
                value={forecast.date}
                onChange={onChange}
            />

            <TextInput
                type="number"
                id="temperature"
                name="temperature"
                label="Temperature"
                title="How hot was it? In celsius please"
                error={errors.temperature}
                value={forecast.temperature}
                onChange={onChange}
            />

            <div className="form-group">
                <label htmlFor="category">Summary</label>
                <select
                    id="summary"
                    name="summary"
                    className="form-control"
                    value={forecast.summary}
                    onChange={onChange}
                >
                    <option value=""></option>
                    <option value="Freezing">"Freezing"</option>
                    <option value="Bracing">"Bracing"</option>
                    <option value="Chilly">"Chilly"</option>
                    <option value="Cool">"Cool"</option>
                    <option value="Mild">"Mild"</option>
                    <option value="Warm">"Warm"</option>
                    <option value="Balmy">"Balmy"</option>
                    <option value="Hot">"Hot"</option>
                    <option value="Sweltering">"Sweltering"</option>
                    <option value="Scorching">"Scorching"</option>
                </select>
                {errors.summary && <div className="alert alert-danger">{errors.summary}</div>}
            </div>

            <input type="submit" value="Save" className="btn btn-primary"/>
        </form>
    );
}

export default ForecastForm;