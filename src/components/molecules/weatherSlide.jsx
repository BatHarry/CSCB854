import React, { useEffect, useState } from "react";
import conditions from "../../utils/conditions.json";
import { v4 as uuidv4 } from "uuid";

export default function WeatherSlide({ city, cityEng }) {
  const [weatherData, setWeatherData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=c1c5533361d94859a88204446222806&q=${cityEng}&days=3&aqi=no&alerts=no`,
      {
        method: "GET",
        mode: "cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    )
      .then((response) => response.json())
      .then((weatherData) => {
        setWeatherData(weatherData);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, [cityEng]);

  let conditionCode = null;
  let condition = null;
  let hours = [];
  let forecast = [];

  if (!loading) {
    conditionCode = weatherData.current.condition.code;
    condition = conditions.find(
      (condition) => condition.code === conditionCode
    );

    hours = weatherData.forecast.forecastday[0].hour.filter((hour) => {
      let hourDate = new Date(hour.time).getTime() / 1000;
      let currentHour = new Date().getTime() / 1000;
      return currentHour + 3600 * 4 > hourDate && hourDate > currentHour;
    });

    forecast = weatherData.forecast.forecastday.slice(1);
  }

  if (loading) return null;

  return (
    <div className="weather-slide">
      <div className="weather-slide__header">
        <h2>{city}</h2>
      </div>
      <div className="weather-slide__info">
        <div className="today">
          <div className="today__icon">
            <img
              src={`/images/icons/${
                weatherData.current.is_day ? "day" : "night"
              }/${condition.icon}.png`}
              alt=""
            />
          </div>

          <div className="today__current">
            <span className="today__degrees">
              {weatherData.current.temp_c}℃
            </span>
            <p className="today__wind">
              Вятър: {weatherData.current.wind_kph}км/ч{" "}
              {weatherData.current.wind_dir}
            </p>
          </div>

          <div className="today__hours">
            {hours.map((hour) => {
              let conditionCode = hour.condition.code;
              let condition = conditions.find(
                (condition) => condition.code === conditionCode
              );

              return (
                <div className="hour" key={uuidv4()}>
                  <div className="hour__time">{hour.time.split(" ")[1]}</div>
                  <div className="hour__icon">
                    <img
                      src={`/images/icons/${hour.is_day ? "day" : "night"}/${
                        condition.icon
                      }.png`}
                      alt=""
                    />
                  </div>
                  <div className="hour__degrees">{hour.temp_c}℃</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="forecast">
          {forecast.map((day) => {
            let conditionCode = day.day.condition.code;
            let condition = conditions.find(
              (condition) => condition.code === conditionCode
            );

            return (
              <div className="forecast__date" key={uuidv4()}>
                <p>
                  {new Date(day.date).toLocaleString("bg-BG").split(",")[0]}
                </p>
                <img src={`/images/icons/day/${condition.icon}.png`} alt="" />
                <p>18℃</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
