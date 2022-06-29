import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <h3>Времето в твоя град</h3>
      <p>
        Проект на Мартин Хараланов (Инфорамтика). Факултетен номер F88226 <br />
        Powered by{" "}
        <a
          style={{ color: "white" }}
          href="https://www.weatherapi.com/"
          title="Free Weather API"
        >
          WeatherAPI.com
        </a>
      </p>
    </div>
  );
}
