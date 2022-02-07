import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "http://localhost:5250/weatherforecast/";

export function getWeather() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function saveForecast(forecast) {
  return fetch(baseUrl + (forecast.id || ""), {
    method: forecast.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      ...forecast,
      // Parse authorId to a number (in case it was sent as a string).
      temperature: parseInt(forecast.temperature, 10)
    })
  })
    .then(handleResponse)
    .catch(handleError);
}

export function getForecastById(id) {
  return fetch(baseUrl + id)
      .then(response => {
        if (!response.ok) throw new Error("Network response was not ok.");
        return response.json().then(forecast => {
          if (!forecast) throw new Error("Forecast not found: " + id);
          return forecast;
        });
      })
      .catch(handleError);
}

export function deleteForecast(id) {
  return fetch(baseUrl + id, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
