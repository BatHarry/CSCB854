import HeroBanner from "./components/organisms/heroBanner";
import React from "react";
import "./index.scss";
import Weather from "./components/organisms/weather";
import Footer from "./components/organisms/footer";

function App() {
  return (
    <>
      <HeroBanner />
      <Weather />
      <Footer />
    </>
  );
}

export default App;
