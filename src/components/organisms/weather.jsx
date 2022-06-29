import React from "react";
import WeatherSlide from "../molecules/weatherSlide";

export default function Weather() {
  return (
    <div id="weather" className="weather">
      <div className="weather__container">
        <WeatherSlide city="София" cityEng={"Sofia"} />
        <WeatherSlide city="Пловдив" cityEng={"Plovdiv"} />
        <WeatherSlide city="Варна" cityEng={"Varna"} />
        <WeatherSlide city="Бургас" cityEng={"Burgas"} />
        <WeatherSlide city="Русе" cityEng={"Ruse"} />
        <WeatherSlide city="Стара Загора" cityEng={"Stara Zagora"} />
      </div>
    </div>
  );
}
