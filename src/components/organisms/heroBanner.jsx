import React from "react";

export default function HeroBanner() {
  return (
    <div className="hero-banner">
      <div className="hero-banner__image">
        <div className="hero-banner__text">
          <div className="hero-banner__text--logo">
            <img
              src="/images/770b805d5c99c7931366c2e84e88f251.png"
              alt="logo"
              className="logo"
            />
          </div>
          <div className="hero-banner__text--text">
            <h1>
              Времето
              <br />
              <span>в твоят град</span>
            </h1>
            <p>
              Прогнозата за времето за шестта най-големи градове в България. По
              прогнозата на{" "}
              <a href="https://www.weatherapi.com/" title="Free Weather API">
                WeatherAPI.com
              </a>
            </p>
            <button
              onClick={() => {
                document.getElementById("weather").scrollIntoView();
              }}
              className="btn"
            >
              Виж прогнозата
            </button>
          </div>
        </div>
      </div>
      <div className="hero-banner__scroll">
        <div className="hero-banner__scroll--element"></div>
      </div>
    </div>
  );
}
