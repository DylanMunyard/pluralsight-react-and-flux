import React from "react";
import {Link} from "react-router-dom";
import {Forecast} from "../models/Forecast";

export interface Props {
    weather: Weather[],
    deleteForecast: (forecast: Forecast) => Promise<void>
}

export type Weather = {
    id:  number,
    date: any,
    temperature: any,
    summary: string
}

const WeatherList: React.FC<Props> = ({ weather, deleteForecast }) => {
    return (
        <table className="table">
            <thead>
            <tr>
                <th>&nbsp;</th>
                <th>Date</th>
                <th>Temperature</th>
                <th>Summary</th>
            </tr>
            </thead>
            <tbody>
            {weather.map((w: Weather) => {
                return <tr key={w.id}>
                    <td>
                        <button className="btn btn-outline-danger" onClick={() => deleteForecast(w)}>Delete</button>
                    </td>
                    <td><Link to={"/forecast/" + w.id}>{w.date}</Link></td>
                    <td>{w.temperature}</td>
                    <td>{w.summary}</td>
                </tr>
            })}
            </tbody>
        </table>
    )
}

export default WeatherList;